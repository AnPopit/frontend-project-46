const getValue = (value) => {
  if (typeof(value) === 'boolean' || value === null ) {
    return value;
  }
  if (value !== null && typeof value === 'object') {
    return '[complex value]';
  }
  return `'${value}'`;
}

const getPlain = (tree) => {
  const iter = (node, path) => {
    const result = node.map((obj) => {
      const keys = Object.keys(obj);
      const res = keys.map((key1) => {
        if (key1 === 'type') {
          const newAncestry = path === ''?  `${obj['key']}`: `${path}.${obj['key']}`;
          switch (obj['type']) {
            case 'added':
              return `Property '${newAncestry}' was added with value: ${getValue(obj['value'])}`;
            case 'unchanged':
            case 'changed':
              return `Property '${newAncestry}' was updated. From ${getValue(obj['value1'])} to ${getValue(obj['value2'])}`;
            case 'deleted':
              return `Property '${newAncestry}' was removed`;
            case 'nested':
              return iter(obj['children'], newAncestry);
          }
        }
      });
        return `${(res.join(''))}`;
    });
    return `${result.join('\n')}`;
  };
  return iter(tree, '');
};

export default getPlain;
