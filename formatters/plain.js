const getValue = (value) => {
  if (typeof (value) === 'boolean' || value === null || typeof (value) === 'number') {
    return value;
  }
  if (value !== null && typeof value === 'object') {
    return '[complex value]';
  }
  return `'${value}'`;
};

const getPlain = (tree) => {
  const iter = (node, path) => {
    const result = node.map((obj) => {
      const newAncestry = path === '' ? `${obj.key}` : `${path}.${obj.key}`;
      switch (obj.type) {
        case 'added':
          return `Property '${newAncestry}' was added with value: ${getValue(obj.value)}`;
        case 'unchanged':
          return '';
        case 'changed':
          return `Property '${newAncestry}' was updated. From ${getValue(obj.value1)} to ${getValue(obj.value2)}`;
        case 'deleted':
          return `Property '${newAncestry}' was removed`;
        case 'nested':
          return iter(obj.children, newAncestry);
        default:
          throw new Error('Unknown type!');
      }
    });
    const res = result.join('\n');
    const resFil = res.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, '');
    return resFil;
  };
  return iter(tree, '');
};

export default getPlain;
