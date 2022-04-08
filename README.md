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

<hr>

## Instalación de MySQL para el manejo de los datos de la aplicación

```bash
sudo apt install mysql-server

sudo mysql_secure_installation
```

Responda "Y" sí, o cualquier otra cosa para continuar sin habilitar.

```bash
VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Press y|Y for Yes, any other key for No:
```

Si ha habilitado la validación, el script también le pedirá que
seleccione un nivel de validación de contraseña.
Tenga en cuenta que si ingresa 2 , para el nivel más fuerte,
recibirá errores cuando intente establecer cualquier contraseña
que no contenga números, letras mayúsculas y minúsculas y caracteres especiales,
o que se base en palabras comunes del diccionario.

```bash
There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 1
```

A continuación, se le pedirá que envíe y confirme una contraseña de root.

```bash
Please set the password for root here.

New password:

Re-enter new password:
```

<br>

## Configuracion del usuario de MySQL

```bash
sudo mysql
```

```SQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

```SQL
exit
```

<br>

## Crear la base de datos de usuarios y las credenciales para el acceso desde el backend.

```SQL
mysql -u root -p
```

Se te pedira la contraseña.

```SQL
CREATE DATABASE itsystems;

USE itsystems;

CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, clave VARCHAR(255) NOT NULL);

INSERT INTO users (clave) VALUES ('ITS42672903');

exit
```

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

### Configurar las variables de entorno para conectar a la base de datos y establecer el servidor SMTP

```bash
cp .env.example .env

sudo nano .env
```

```bash
# BACKEND PORT
PORT=8000

# DATABASE CONFIGURATION
DB_SERVER=localhost
DB_USER=root
DB_PASSWORD=password
DB_DATABASE=itsystems

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

### PM2 para el proyecto

```bash
sudo pm2 start app.js

sudo pm2 startup systemd

sudo pm2 save
```

Ahora podra acceder a su dashboard de desarrollo en la siguiente dirección:

```
your_domain_or_ip:8000
```

Podra iniciar sesión con la clave ingresda en su tabla 'users'
al momento de crear la base de datos.

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
export const BASE_URL = "http://your_domain_or_ip:8000";
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
  server_name server_domain_or_IP;
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
