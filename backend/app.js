require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.use(
//   express.static(path.resolve(__dirname, "./build"), {
//     extensions: ["html", "htm"],
//   })
// );

// app.use(express.static("clients"));

// app.get("/list-clients", async (req, res) => {
//   try {
//     await fs.readdir(__dirname + "/clients/", function (err, archivos) {
//       if (err) {
//         onError(err);
//         return;
//       }

//       res.sendFile(__dirname + "/clients/" + `${archivos[1]}`);
//     });
//   } catch (error) {
//     res.send("fail");
//   }
// });

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
    res.send("fail");
  }
});

app.get("/list-technology", async (req, res) => {
  try {
    await fs.readdir(__dirname + "/public/technology/", function (err, archivos) {
      if (err) {
        onError(err);
        return;
      }
      res.json(archivos);
    });
  } catch (error) {
    res.send("fail");
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

app.post("/technology", uploadTechnology.array("file"), async (req, res) => {
  const arrayfiles = req.files;
  console.log(arrayfiles);
  try {
    res.send("success");
  } catch (error) {
    res.send("fail");
  }
});

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

app.post("/clients", uploadClients.array("file"), async (req, res) => {
  const arrayfiles = req.files;
  console.log(arrayfiles);
  try {
    res.send("success");
  } catch (error) {
    res.send("fail");
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

    res.send("success");
  } catch (error) {
    res.send("fail");
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
    res.send("fail");
  }
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log("Server on PORT", app.get("port"));
});
