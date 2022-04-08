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

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/public/dashboard.html");
});

// EndPoint's
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
    res.sendFile(path.join(__dirname, "/public/fail.html"));
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
    res.sendFile(path.join(__dirname, "/public/fail.html"));
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
      Filter.render(
        arrayfiles[0].path,
        Filter.preset.grayscale,
        function (result) {
          result.data.pipe(
            fs.createWriteStream(
              arrayfiles[0].destination + arrayfiles[0].filename
            )
          );
          res.sendFile(path.join(__dirname, "/public/success.html"));
        }
      );
    } catch (error) {
      res.sendFile(path.join(__dirname, "/public/fail.html"));
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
    Filter.render(
      arrayfiles[0].path,
      Filter.preset.grayscale,
      function (result) {
        result.data.pipe(
          fs.createWriteStream(
            arrayfiles[0].destination + arrayfiles[0].filename
          )
        );
        res.sendFile(path.join(__dirname, "/public/success.html"));
      }
    );
  } catch (error) {
    res.sendFile(path.join(__dirname, "/public/fail.html"));
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
  const { name, email, phone, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.FROM,
      to: process.env.TO,
      subject: process.env.SUBJECT,
      text: `Name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/> Message: ${message}`,
      attachments: [
        {
          filename: arrayfiles[0].filename,
          path: __dirname + `./public/files/${arrayfiles[0].filename}`,
        },
      ],
    });

    res.status(200).json({ message: "The information was sent successfully" });
  } catch (error) {
    res.status(200).json({
      message:
        "It was not possible to send the requested information, please try again later",
    });
  }
});

app.post("/contacts", async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.FROM,
      to: process.env.TO,
      subject: process.env.SUBJECT,
      text: `Name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/> Message: ${message}`,
    });

    res.status(200).json({ message: "The information was sent successfully" });
  } catch (error) {
    res.status(200).json({
      message:
        "It was not possible to send the requested information, please try again later",
    });
  }
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log("Server on PORT", app.get("port"));
});
