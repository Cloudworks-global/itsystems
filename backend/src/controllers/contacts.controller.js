import { createTransport } from "nodemailer";

export const store = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    let transporter = createTransport({
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
    });

    res.status(200).json({ message: "The information was sent successfully" });
  } catch (error) {
    res.status(200).json({
      message:
        "It was not possible to send the requested information, please try again later",
    });
  }
};
