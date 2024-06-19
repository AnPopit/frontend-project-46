const getMargin = (depthFun, offset = 0) => {
  const countMargin = 4;
  const margin = ' ';
  return (margin.repeat(countMargin * depthFun - offset));
};

const stringify = (value, dep) => {
  const iter = (node, depth) => {
    if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
      return `${node}`;
    }
    const keys = Object.keys(node);
    const result = keys.map((key) => {
      if (node[key] !== null && typeof node[key] === 'object') {
        return `${getMargin(depth)}${key}: ${iter(node[key], depth + 1)}`;
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
      const keys = Object.keys(obj);
      const res = keys.map((key1) => {
        if (key1 === 'type') {
          switch (obj.type) {
            case 'added':
              return `${getMargin(depth, offset)}+ ${obj.key}: ${stringify(obj.value, depth)}`;
            case 'unchanged':
              return `${getMargin(depth, offset)}  ${obj.key}: ${obj.value}`;
            case 'changed':
              return `${getMargin(depth, offset)}- ${obj.key}: ${obj.value1} \n${getMargin(depth, 2)}+ ${obj.key}: ${obj.value2}`;
            case 'deleted':
              return `${getMargin(depth, offset)}- ${obj.key}: ${obj.value}`;
            case 'nested':
              return `${getMargin(depth, offset)}  ${obj.key}: ${iter(obj.children, depth + 1)}`;
            default:
              throw new Error('Unknown type!');
          }
        }
        return null;
      });
      return `${res.join('')}`;
    });
    return `{\n${result.join('\n')}\n${getMargin(depth, offsetMargin)}}`;
  };
  return iter(tree, 1);
};

export default getStylish;
