import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parsing from './parsers.js';
//import parsing from './fo.js';
const genDiff = (filepath1, filepath2, format = 'stylish') => {
  //const filePath1 = path.resolve(process.cwd(), filepath1);
 // const file1 = fs.readFileSync(filePath1, 'utf8');
 // const format1 = path.extname(filePath1);
 // const filePath2 = path.resolve(process.cwd(), filepath2);
 // const file2 = fs.readFileSync(filePath2, 'utf8');
 // const format2 = path.extname(filePath2);
 // const obj1 = parsing(file1, format1);
  //const obj2 = parsing(file2, format2);
  const obj1 = {"host": "hexlet.io","timeout": 50,"proxy": "123.234.53.22","follow": false};
  const obj2 = {"timeout": 20,"verbose": true,"ost": {"host": "hexlet.io","timeout": 50} };
  const obj3 = [...new Set([...Object.entries(obj1), ...Object.entries(obj2)])];
  const keys1 = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])];
  console.log(obj3);
    const iter = (node, d) => {
    const keys = Object.keys(node);   
    console.log(keys);
    const result = keys.sort().map((key) => {
    if (node[key] !== null && typeof node[key] === 'object') {
        return `{\n"key": "${[key]}"\n"children": ${iter(node[key], d +1)}\n}`;
    }
    if (!obj1.hasOwnProperty(key)) {
      return `{\n"key": "${key}"\n"value": ${obj2[key]}\n"type": added\n}`;
    }
    if (!obj2.hasOwnProperty(key)) {
      return `{\n"key": "${key}"\n"value": ${obj1[key]}\n"type": deleted\n}`;
    }
    if (obj1[key] !== obj2[key]) {
      return `{\n"key": "${key}"\n"value1": ${obj1[key]}\n"value2": ${obj2[key]}\n"type": changed\n}`;
    }
    if (obj1[key] === obj2[key]) {
      return `{\n"key": "${key}"\n"value": ${obj1[key]}\n"type": unchanged\n}`;
    }
  });
  return `{\n${result.join('\n')}\n}`; //дерево отличий в отдельный файл
}
return iter(obj3, 1);
};

console.log(genDiff());
export default genDiff;
