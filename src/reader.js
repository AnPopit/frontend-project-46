import path from 'path';
import fs from 'fs';

const readFile = (filepath) => {
  const filePath = path.resolve(process.cwd(), filepath);
  const file = fs.readFileSync(filePath, 'utf-8');
  return file;
};

export default readFile;
