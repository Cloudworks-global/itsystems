require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const nodemailer = require("nodemailer");
const Filter = require("node-image-filter");

const app = express();

const pool = require("./config/database");

app.use(morgan("tiny"));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  express.static(path.resolve(__dirname, "./public"), {
    extensions: ["html", "htm"],
  })
);

// Pages
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/careers", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/reviews-awards", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/dashboard.html");
});

// EndPoint
app.post("/login", async (req, res) => {
  const { clave } = req.body;
  console.log(clave);
  const results = await pool.query(
    "SELECT COUNT(*) AS cantidad FROM users WHERE clave = ?",
    [clave]
  );
  if (results[0].cantidad == 0) {
    res.send("null");
  } else {
    res.send("ok");
  }
});

app.get("/list-clients", async (req, res) => {
  try {
    await fs.readdir(__dirname + "/public/clients/", function (err, archivos) {
      if (err) {
        console.log(err);
        return;
      }

      res.json(archivos);
    });
  } catch (error) {
    res.sendFile(path.join(__dirname, '/public/fail.html'));
  }
});

app.get("/list-technology", async (req, res) => {
  try {
    await fs.readdir(
      __dirname + "/public/technology/",
      function (err, archivos) {
        if (err) {
          onError(err);
          return;
        }
        res.json(archivos);
      }
    );
  } catch (error) {
    res.sendFile(path.join(__dirname, '/public/fail.html'));
  }
});

const storageTechnology = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/technology/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var uploadTechnology = multer({ storage: storageTechnology });

app.post(
  "/technology",
  uploadTechnology.array("file-technology"),
  async (req, res) => {
    const arrayfiles = req.files;
    try {
      Filter.render(arrayfiles[0].path, Filter.preset.grayscale, function (result) {
        result.data.pipe(fs.createWriteStream(arrayfiles[0].destination+arrayfiles[0].filename));
        res.sendFile(path.join(__dirname, '/public/success.html'));
      });
    } catch (error) {
      res.sendFile(path.join(__dirname, '/public/fail.html'));
    }
  }
);

const storageClients = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/clients/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var uploadClients = multer({ storage: storageClients });

app.post("/clients", uploadClients.array("file-clients"), async (req, res) => {
  const arrayfiles = req.files;
  try {
    Filter.render(arrayfiles[0].path, Filter.preset.grayscale, function (result) {
      result.data.pipe(fs.createWriteStream(arrayfiles[0].destination+arrayfiles[0].filename));
      res.sendFile(path.join(__dirname, '/public/success.html'));
    });
  } catch (error) {
    res.sendFile(path.join(__dirname, '/public/fail.html'));
  }
});

const storageCv = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/files/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var uploadCv = multer({ storage: storageCv });

app.post("/email-cv", uploadCv.array("cv"), async (req, res) => {
  const arrayfiles = req.files;
  const { name, email, phone, messsage } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 2525,
      secure: false,
      auth: {
        user: "EzequielNunez",
        pass: "Divhmtldiv32",
      },
    });

    let info = await transporter.sendMail({
      from: '"ITSystems" <emensaje@connaxis.com>',
      to: "ezequiel@identy.cloud",
      subject: "ITSystems - Email",
      text: `Prueba de Texto`,
      attachments: [
        {
          filename: "demo.pdf",
          path: __dirname + "./public/files/demo.pdf",
        },
      ],
    });

    res.sendFile(path.join(__dirname, '/public/success.html'));
  } catch (error) {
    res.sendFile(path.join(__dirname, '/public/fail.html'));
  }
});

app.post("/email", async (req, res) => {
  const { email } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "mail.smtp2go.com",
      port: 2525,
      secure: false,
      auth: {
        user: "EzequielNunez",
        pass: "Divhmtldiv32",
      },
    });

    let info = await transporter.sendMail({
      from: '"ITSystems" <emensaje@connaxis.com>',
      to: "ezequiel@identy.cloud",
      subject: "ITSystems - Email",
      text: `Prueba de Texto`,
    });

    res.send("Message sent: %s", info.messageId);
  } catch (error) {
    res.sendFile(path.join(__dirname, '/public/fail.html'));
  }
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log("Server on PORT", app.get("port"));
});
