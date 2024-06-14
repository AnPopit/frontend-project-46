const getPlain = (tree) => {
  const type = 'type';
  const key1 = 'key';
  const value = 'value';
  const value1 = 'value1';
  const value2 = 'value2';
  const children = 'children';
  const iter = (node, path) => {
    const result = node.map((obj) => {
      const keys = Object.keys(obj);
      const res = keys.map((key) => {
        if (key === 'type') {
          if (obj[type] === 'added') {
            return `Property '${obj[key1]}' was added with value: ${obj[value]}`; //case
          }
          // if (obj[type] === 'unchanged') {
          //  return `${margin.repeat(4 * depth - 2)}  ${obj[key1]}: ${obj[value]}`; //null
          // }
          if (obj[type] === 'changed') {
            return `Property '${obj[key1]}' was updated. From ${obj[value1]} to ${obj[value2]}`;
          }
          if (obj[type] === 'deleted') {
            return `Property '${obj[key1]}' was removed`;
          }
          if (obj[type] === 'nested') {
            return '[complex value]';
            // return `${margin.repeat(4 * depth - 2)}  ${obj[key1]}: ${iter(obj[children], depth + 1)}`
          }
        }
      });
      return `${res.join('')}`;
    });
    return `${result.join('\n')}`;
  };
  return iter(tree, 1);
};
const massiv = [
  {
    key: 'common',
    children: [
      {
        key: 'глубина должна быть два 1',
        value: false,
        type: 'added',
      },
      {
        key: 'глубина должна быть два 2',
        value: 'Value 1',
        type: 'unchanged',
      },
      {
        key: 'глубина должна быть два 3',
        value: 200,
        type: 'deleted',
      },
      {
        key: 'глубина должна быть два 4',
        children: [
          {
            key: 'очень глубоко',
            value: 200,
            type: 'deleted',
          },

        ],
        type: 'nested',
      },
    ],
    type: 'nested',
  },
  {
    key: 'test',
    value: 200,
    type: 'deleted',
  },
  {
    key: 'group2',
    value: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    type: 'deleted',
  },
];
console.log(getPlain(massiv));
