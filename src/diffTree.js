import _ from 'lodash';

const getDiffTree = (obj1, obj2) => {
  const iter = (node1, node2) => {
    const keys = [...new Set([...Object.keys(node1), ...Object.keys(node2)])];
    const result = keys.sort().map((key) => {
      if ((node1[key] !== null && typeof node1[key] === 'object') && (node2[key] !== null && typeof node2[key] === 'object')) {
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
    return result;
  };
  return iter(obj1, obj2);
};

const obj1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};
const obj2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

console.log(getDiffTree(obj1, obj2));

export default getDiffTree;
