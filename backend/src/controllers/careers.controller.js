import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createTransport } from "nodemailer";

export const store = async (req, res) => {
  const arrayfiles = req.files;
  const { name, email, phone, message } = req.body;

  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    const transporter = createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM,
      to: process.env.TO,
      subject: process.env.SUBJECT,
      text: `Name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/> Message: ${message}`,
      attachments: [
        {
          filename: arrayfiles[0].filename,
          path: join(__dirname, "../public/files/${arrayfiles[0].filename}"),
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
};
