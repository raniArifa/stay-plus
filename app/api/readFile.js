import fs from 'fs';
import path from 'path';

export default function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    // Get the path to your HTML file
    const fullPath = path.join(process.cwd(), filePath);

    // Read the HTML file
    fs.readFile(fullPath, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading HTML file:', err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
