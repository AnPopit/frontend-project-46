import _ from 'lodash';

const getDiffTree = (obj1, obj2) => {
  const iter = (node1, node2) => {
    const keys = [...new Set([...Object.keys(node1), ...Object.keys(node2)])];
    return _.sortBy(keys).map((key) => {
      if (_.isPlainObject(node1[key]) && _.isPlainObject(node2[key])) {
        return { key, children: iter(node1[key], node2[key]), type: 'nested' };
      }
      if (!(_.has(node1, key))) {
        return { key, value: node2[key], type: 'added' };
      }
      if (!(_.has(node2, key))) {
        return { key, value: node1[key], type: 'deleted' };
      }
      if (node1[key] !== node2[key]) {
        return {
          key, value1: node1[key], value2: node2[key], type: 'changed',
        };
      }
      return { key, value: node1[key], type: 'unchanged' };
    });
  };
  return iter(obj1, obj2);
};

export default getDiffTree;
