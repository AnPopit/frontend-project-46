import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parsing from './parsers.js';

const genDiff = (filepath1, filepath2) => {
  const filePath1 = path.resolve(process.cwd(), filepath1);
  const file1 = fs.readFileSync(filePath1, 'utf8');
  const format1 = path.extname(filePath1);
  const filePath2 = path.resolve(process.cwd(), filepath2);
  const file2 = fs.readFileSync(filePath2, 'utf8');
  const format2 = path.extname(filePath2);
  const obj1 = parsing(file1, format1);
  const obj2 = parsing(file2, format2);
  const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
  const result = keys.sort().map((key) => {
    if (!obj1.hasOwnProperty(key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
    if (!obj2.hasOwnProperty(key)) {
      return `  - ${key}: ${obj1[key]}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
    }
    if (obj1[key] === obj2[key]) {
      return `    ${key}: ${obj1[key]}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
