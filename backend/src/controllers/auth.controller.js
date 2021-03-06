import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { getConnection } from "../database/database.js";

export const login = async (req, res) => {
  const db = getConnection();
  const { email, password } = req.body;

  if (email && password) {
    const user = db.data.users.find((u) => u.email === email);

    if (!user) {
      return res.status(400).json({
        auth: false,
        message: "User not found",
        token: null,
      });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24,
        });
        res.status(200).json({
          auth: true,
          message: "Login successful",
          token,
        });
      } else {
        res.status(400).json({
          auth: false,
          message: "Wrong password",
          token: null,
        });
      }
    }
  } else {
    res.status(400).json({
      auth: false,
      message: "Missing email or password",
      token: null,
    });
  }
};
