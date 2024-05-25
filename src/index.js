import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parsing from './parsing.js';

const genDiff = (filepath1, filepath2) => {
  const filePath1 = path.resolve(process.cwd(), filepath1);
  const file1 = fs.readFileSync(filePath1);
  const filePath2 = path.resolve(process.cwd(), filepath2);
  const file2 = fs.readFileSync(filePath2);
  const obj1 = parsing(file1);
  const obj2 = parsing(file2);
  const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
  const result = keys.sort().map((key) => {
    if (!obj1.hasOwnProperty(key)) {
      return `+ ${key}: ${obj2[key]} `;
    }
    if (!obj2.hasOwnProperty(key)) {
      return `- ${key}: ${obj1[key]} `;
    }
    if (obj1[key] !== obj2[key]) {
       return `- ${key}: ${obj1[key]}\n+ ${key}: ${obj2[key]}`;
    }
    if (obj1[key] == obj2[key]) {
        return `  ${key}: ${obj1[key]} `;
     }
  });
  return `{\n${result.join('\n')}\n}`;
  // результат сравнения двух файлов
  // 1. Обработали пути path.resolve(process.cwd(), filepath1) это путь
  // 2. Прочитали файлы readFileSync fs.readFileSync()
  // 3. Получили расширения файлов есть  спец функция у path.
  // 4. Парсинг данных передаю из 2 пункта и рачсширения из 3 пункта //это должны импортитровапть
};

export default genDiff;
// compare в отдельном файле
