import fs from 'fs';
import path from 'path';
import parsing from './parsers.js';
import getFormatter from '../formatters/index.js';
import getDiffTree from './diffTree.js';


const genDiff = (filepath1, filepath2, formatterType = 'stylish') => {
  const filePath1 = path.resolve(process.cwd(), filepath1);
  const file1 = fs.readFileSync(filePath1, 'utf8');
  const format1 = path.extname(filePath1);
  const filePath2 = path.resolve(process.cwd(), filepath2);
  const file2 = fs.readFileSync(filePath2, 'utf8');
  const format2 = path.extname(filePath2);
  const obj1 = parsing(file1, format1);
  const obj2 = parsing(file2, format2);
  const resultDiffTree = getDiffTree(obj1, obj2);
  const resultFormatters = getFormatter(resultDiffTree, formatterType);
  return resultFormatters;
};

export default genDiff;
