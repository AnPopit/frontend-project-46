const genDiff = () => {
  const obj1 = {
    host: 'hexlet.io', timeout: 20, proxy: '123.234.53.22', follow: false,
  };
  const obj2 = { 
    follow: false, lalala: { host: 'anna.io', timeout: 50 } 
};
  const iter = (node1, node2) => {
    const keys = [...new Set([...Object.keys(node1), ...Object.keys(node2)])];
    const result = keys.sort().map((key) => {
      if (node1[key] !== null && typeof node1[key] === 'object') {
        return { key, children: [iter(node1[key])], type: 'nested' };
      }
      if (node2[key] !== null && typeof node2[key] === 'object') {
        return { key, children: [iter(node2[key])], type: 'nested' };
      }
      if (!obj1.hasOwnProperty(key)) {
        return { key, value: obj2[key], type: 'added' };
      }
      if (!obj2.hasOwnProperty(key)) {
        return { key, value: obj1[key], type: 'deleted' };
      }
      if (obj1[key] !== obj2[key]) {
        return {
          key, value1: obj1[key], value2: obj2[key], type: 'changed',
        };
      }
      if (obj1[key] === obj2[key]) {
        return { key, value: obj1[key], type: 'unchanged' };
      }
    });
    return result; // дерево отличий в отдельный файл
  };
  return iter(obj1, obj2);
};

console.log(genDiff());
export default genDiff;
