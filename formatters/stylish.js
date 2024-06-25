import _ from 'lodash';

const getMargin = (depthFun, offset = 0) => {
  const countMargin = 4;
  const margin = ' ';
  return (margin.repeat(countMargin * depthFun - offset));
};

const stringify = (value, dep) => {
  const iter = (node, depth) => {
    if (!(_.isPlainObject(node))) {
      return `${node}`;
    }
    const keys = Object.keys(node);
    const result = keys.map((key) => {
      if (_.isPlainObject(node[key])) {
        return `${getMargin(depth + 1)}${key}: ${iter(node[key], depth + 1)}`;
      }
      return `${getMargin(depth + 1)}${key}: ${node[key]}`;
    });
    return `{\n${result.join('\n')}\n${getMargin(depth)}}`;
  };
  return iter(value, dep);
};

const getStylish = (tree) => {
  const offset = 2;
  const offsetMargin = 4;
  const iter = (node, depth) => {
    const result = node.map((obj) => {
      switch (obj.type) {
        case 'added':
          return `${getMargin(depth, offset)}+ ${obj.key}: ${stringify(obj.value, depth)}`;
        case 'unchanged':
          return `${getMargin(depth, offset)}  ${obj.key}: ${stringify(obj.value, depth)}`;
        case 'changed':
          return `${getMargin(depth, offset)}- ${obj.key}: ${stringify(obj.value1, depth)}\n${getMargin(depth, offset)}+ ${obj.key}: ${stringify(obj.value2, depth)}`;
        case 'deleted':
          return `${getMargin(depth, offset)}- ${obj.key}: ${stringify(obj.value, depth)}`;
        case 'nested':
          return `${getMargin(depth, offset)}  ${obj.key}: ${iter(obj.children, depth + 1)}`;
        default:
          throw new Error('Unknown type!');
      }
    });
    return `{\n${result.join('\n')}\n${getMargin(depth, offsetMargin)}}`;
  };
  return iter(tree, 1);
};

export default getStylish;
