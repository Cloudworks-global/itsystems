import fs from "fs";
import { render, preset } from "node-image-filter";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export const index = async (req, res) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  try {
    await fs.readdir(
      join(__dirname, "../public/technology/"),
      function (err, files) {
        if (err) {
          res.status(500).json({
            status: "error",
            message: "Error listing files",
          });
        }

        res.status(200).json(files);
      }
    );
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error listing files",
    });
  }
};

export const store = async (req, res) => {
  try {
    files.forEach((e) => {
      render(e.path, preset.grayscale, function (result) {
        result.data.pipe(fs.createWriteStream(e.destination + e.filename));
      });
    });

    res.status(200).json({
      status: "success",
      message: "File uploaded",
    });
  } catch {
    res.status(500).json({
      status: "error",
      message: "Error uploading file",
    });
  }
};
