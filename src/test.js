const genDiff = () => {
  const obj1 = {
    host: 'hexlet.io', timeout: 20, proxy: '123.234.53.22', follow: false,
  };
  const obj2 = { verbose: true, ost: { host: 'hexlet.io', timeout: 50 } };
  const obj3 = [...new Set([...Object.entries(obj1), ...Object.entries(obj2)])];
  console.log(obj3);
  // const iter = (node) => {
  // const keys = Object.keys(node);
  // console.log(keys);
  // const result = keys.sort().map((key) => {
  // if (node[key] !== null && typeof node[key] === 'object') {
  //   return `{\n"key": "${[key]}"\n"children": [${iter(node[key])}\n}`; //  "type": "nested"
  // }
  // if (!obj1.hasOwnProperty(key)) {
  //   return `{\n"key": "${key}"\n"value": ${obj2[key]}\n"type": added\n}`;
  // }
  // if (!obj2.hasOwnProperty(key)) {
  //   return `{\n"key": "${key}"\n"value": ${obj1[key]}\n"type": deleted\n}`;
  // }
  // if (obj1[key] !== obj2[key]) {
  //  return `{\n"key": "${key}"\n"value1":
  // ${obj1[key]}\n"value2": ${obj2[key]}\n"type": changed\n}`;
  // }
  // if (obj1[key] === obj2[key]) {
  //  return `"key": key"\n"value": ${obj1[key]}\n"type": unchanged\n}`;
  // }
  // });
  //  return `[\n${result.join('\n')}\n]`; // дерево отличий в отдельный файл
  // };
//  return iter(obj3);
};

console.log(genDiff());
export default genDiff;
