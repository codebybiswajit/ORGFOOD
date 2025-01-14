import { readdir, readFile, writeFile, stat } from "fs/promises";
import path from "path";

const directory = "./src/Component"; // Replace with your project directory
const oldText = "api/";
const newText = "/api/";

async function searchAndReplaceFiles(dir, oldText, newText) {
  try {
    const files = await readdir(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const fileStat = await stat(filePath);

      if (fileStat.isDirectory()) {
        await searchAndReplaceFiles(filePath, oldText, newText);
      } else if (fileStat.isFile()) {
        const data = await readFile(filePath, "utf8");
        if (data.includes(oldText)) {
          const updatedData = data.replace(new RegExp(oldText, "g"), newText);
          await writeFile(filePath, updatedData, "utf8");
          console.log(
            `Replaced "${oldText}" with "${newText}" in: ${filePath}`,
          );
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}

searchAndReplaceFiles(directory, oldText, newText);
