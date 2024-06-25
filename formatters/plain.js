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
      switch (obj.type) {
        case 'added':
          return `Property '${path + obj.key}' was added with value: ${getValue(obj.value)}\n`;
        case 'unchanged':
          return '';
        case 'changed':
          return `Property '${path + obj.key}' was updated. From ${getValue(obj.value1)} to ${getValue(obj.value2)}\n`;
        case 'deleted':
          return `Property '${path + obj.key}' was removed\n`;
        case 'nested':
          return iter(obj.children, path + obj.key);
        default:
          throw new Error('Unknown type!');
      }
    });
    return result.join('');
  };
  return iter(tree, '').trim();
};

export default getPlain;
