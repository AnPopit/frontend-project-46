import path from 'path';
import readFile from './reader.js';
import parsing from './parsers.js';

import getFormatter from '../formatters/index.js';
import getDiffTree from './diffTree.js';

const genDiff = (filepath1, filepath2, formatterType = 'stylish') => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const format1 = path.extname(filepath1);
  const format2 = path.extname(filepath2);
  const obj1 = parsing(file1, format1);
  const obj2 = parsing(file2, format2);
  const resultDiffTree = getDiffTree(obj1, obj2);
  const resultFormatters = getFormatter(resultDiffTree, formatterType);
  return resultFormatters;
};

export default genDiff;
