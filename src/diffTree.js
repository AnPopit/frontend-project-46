const getDiffTree = (obj1, obj2) => {
  const iter = (node1, node2) => {
    const keys = [...new Set([...Object.keys(node1), ...Object.keys(node2)])];
    const result = keys.sort().map((key) => {
      if ((node1[key] !== null && typeof node1[key] === 'object') && (node2[key] !== null && typeof node2[key] === 'object')) {
        return { key, children: iter(node1[key], node2[key]), type: 'nested' };
      }
      if (!node1.hasOwnProperty(key)) {
        return { key, value: node2[key], type: 'added' };
      }
      if (!node2.hasOwnProperty(key)) {
        return { key, value: node1[key], type: 'deleted' };
      }
      if (node1[key] !== node2[key]) {
        return {
          key, value1: node1[key], value2: node2[key], type: 'changed',
        };
      }
      return { key, value: node1[key], type: 'unchanged' };
    });
    return result;
  };
  return iter(obj1, obj2);
};

export default getDiffTree;
