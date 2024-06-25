import _ from 'lodash';

const getValue = (value) => {
  if (typeof (value) === 'boolean' || value === null || typeof (value) === 'number') {
    return value;
  }
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return `'${value}'`;
};

const getPlain = (tree) => {
  const iter = (node, path) => {
    const result = node.map((obj) => {
      const newPath = `${path}.${obj.key}`.slice(1);
      switch (obj.type) {
        case 'added':
          return `Property '${newPath}' was added with value: ${getValue(obj.value)}\n`;
        case 'unchanged':
          return '';
        case 'changed':
          return `Property '${newPath}' was updated. From ${getValue(obj.value1)} to ${getValue(obj.value2)}\n`;
        case 'deleted':
          return `Property '${newPath}' was removed\n`;
        case 'nested':
          return iter(obj.children, `${path}.${obj.key}`);
        default:
          throw new Error('Unknown type!');
      }
    });
    return result.join('');
  };
  return iter(tree, '').trim();
};

export default getPlain;
