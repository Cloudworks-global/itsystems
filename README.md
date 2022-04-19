# Información para el despliegue en producción

```
IMPORTANTE:
La siguiente guia esta realizada sobre un hosting de Digital Ocean
con un droplet de 1GB de RAM, 50GB de espacio en disco y Ubuntu 20.04.
```

<hr>

## Guia de configuración inicial para servidores de Ubuntu 20.04 en Digital Ocean

<br>

### Configuración de un cortafuegos basico

```bash
ufw allow OpenSSH
```

```bash
ufw enable
```

### Configuración de un dominio

Si se desea continuar el deploy con Digital Ocean, recomendamos seguir la siguiente
guia para configurar un dominio.

[Configurar un dominio en Digital Ocean](https://docs.digitalocean.com/products/networking/dns/quickstart/)

<hr>

## Instalación de Nginx

```bash
sudo apt update
sudo apt install nginx
```

<br>

### Configuramos el cortafuegos para Nginx

```bash
sudo ufw allow 'Nginx HTTP'
```

<br>

<hr>

## Instalación de NodeJS

```bash
cd ~
curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh

sudo bash nodesource_setup.sh

sudo apt install nodejs

node -v

sudo apt install build-essential
```

<hr>

## Instalación de PM2

```bash
sudo npm install pm2@latest -g
```

<hr>

## Instalación del proyecto (Backend)

```bash
cd /var/www

git clone https://github.com/Cloudworks-global/itsystems.git

cd itsystems/backend
```

<br>

### Configurar las variables de entorno para establecer el servidor SMTP y otras configuraciones

```bash
cp .env.example .env

sudo nano .env
```

```bash
# BACKEND PORT
PORT=3000

# AUTH CONFIGURATION
JWT_SECRET='s3cr3t'

# SMTP SETTINGS
FROM=
TO=
SUBJECT=
HOST=
PORT=
SECURE=
USER=
PASS=
```

<br>

### Instlación de los paquetes necesarios para el backend

```bash
sudo npm install
```

en caso de que el comando anterior arroje un error, probar con el siguiete comando:

```bash
sudo npm update
```

<br>

### Creación de la base de datos y migración de usuarios

```bash
npm run seed
```

De forma predeterminada, el usuario que se crea en la base de datos contine las siguientes credenciales:

```bash
email: admin@itsystems.com
password: 1tsyst3ms
```

Puede cambiar las credenciales por defecto o agregar nuevos usuarios modificando
el archivo ./backend/src/database/seeders/users.seeder.js

```js
//...

// ______________ USUARIOS ______________
const users = [
  {
    email: "admin@itsystems.com",
    password: "1tsyst3ms",
  },
];
// ______________________________________

//...
```

### PM2 para el proyecto

```bash
sudo pm2 start ./src/index.js

sudo pm2 startup systemd

sudo pm2 save
```

Ahora podra acceder a su dashboard de desarrollo en la siguiente dirección:

```
tu_dominio_o_ip:3000
```

<hr>

## Instalación del proyecto (Frontend)

```bash
cd /var/www/itsystems/frontend
```

<br>

### Configuración de la url del backend

```bash
sudo nano ./src/utils/url.js
```

editar el archivo para inlcuir la URL en la cual se esta ejecutando el backend

```js
export const BASE_URL = "http://tu_dominio_o_ip:3000";
```

En caso de que se proteja el dominio mediante https debera modificar el archivo de la siguiente manera:

```js
export const BASE_URL = "https://tu_dominio_o_ip:3000";
```

<br>

### Instalar los paquetes necesarios

```bash
sudo npm install
```

en caso de que el comando anterior arroje un error, probar con el siguiete comando:

```bash
sudo npm update
```

<br>

### Compilar el proyecto

```bash
sudo npm run build
```

<hr>

## Conectar el proyecto (Frontend) al servidor Nginx

```bash
sudo nano /etc/nginx/sites-available/itsystems
```

configure el archivo para incluir las siguientes lineas:

```
server {
  listen 80;
  server_name tu_dominio_o_ip;
  root /var/www/itsystems/frontend/build;
}
```

copie la configuracion generada al los sitios disponibles

```bash
sudo ln -s /etc/nginx/sites-available/itsystems /etc/nginx/sites-enabled/

sudo rm -f /etc/nginx/sites-enabled/default
```

## Configurar HTTPS

```bash
sudo apt install certbot python3-certbot-nginx

sudo certbot --nginx -d your_domain.com
```

Si la comprobación se realiza correctamente,
certbot le preguntará cómo desea configurar sus ajustes de HTTPS:

```bash
Output
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
```

Seleccione la opcion 2 para redirigir todo el trafico HTTP a HTTPS.
