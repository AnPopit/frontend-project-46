import _ from 'lodash';

const stringify = (value, dep) => {
  const margin = '.';
  const iter = (node, depth) => {
    if (typeof node === 'string' || typeof node === 'number' || typeof node === 'boolean') {
      return `${node}`;
    }
    const keys = Object.keys(node);
    const getMargin = (depthFun) => margin.repeat(4 * (depthFun));
    const result = keys.map((key) => {
      if (node[key] !== null && typeof node[key] === 'object') {
        return `${getMargin(depth)}${key}: ${iter(node[key], depth + 1)}`;
      }
      return `${getMargin(depth+ 1)}${key}: ${node[key]}`;
    });
    return `{\n${result.join('\n')}\n${margin.repeat(4 * depth)}}`;
  };
  return iter(value, dep);
};



const getStylish = (tree) => {
  const margin = '.';
  const n = 4;
  const type = 'type';
  const key1 = 'key';
  const value = 'value';
  const value1 = 'value1';
  const value2 = 'value2';
  const children = 'children';

  const iter = (node, depth) => {
    const result = node.map((obj) => {
      const keys = Object.keys(obj);
      const res = keys.map((key) => {
        if (key === 'type') {
          if (obj[type] === 'added') {
            return `${margin.repeat(4 * depth - 2)}+ ${obj[key1]}: ${stringify(obj[value], depth)}`;
          }
          if (obj[type] === 'unchanged') {
            return `${margin.repeat(4 * depth - 2)}  ${obj[key1]}: ${obj[value]}`;
          }
          if (obj[type] === 'changed') {
            return `${margin.repeat(4 * depth - 2)}- ${obj[key1]}: ${obj[value1]} \n${margin.repeat(4 * depth - 2)}+ ${obj[key1]}: ${obj[value2]}`;
          }
          if (obj[type] === 'deleted') {
            return `${margin.repeat(4 * depth - 2)}- ${obj[key1]}: ${obj[value]}`;
          }
          if (obj[type] === 'nested') {
            return `${margin.repeat(4 * depth - 2)}  ${obj[key1]}: ${iter(obj[children], depth + 1)}`;
          }
        }
      });
      return `${res.join('')}`;
    });
    return `{\n${result.join('\n')}\n${margin.repeat(4 * depth - n)}}`;
  };
  return iter(tree, 1);
};

const massiv = [
  {
   "key": "common",
   "children": [
    {
     "key": "follow",
     "value": false,
     "type": "added"
    },
    {
     "key": "setting1",
     "value": "Value 1",
     "type": "unchanged"
    },
    {
     "key": "setting2",
     "value": 200,
     "type": "deleted"
    },
    {
     "key": "setting3",
     "value1": true,
     "value2": null,
     "type": "changed"
    },
    {
     "key": "setting4",
     "value": "blah blah",
     "type": "added"
    },
    {
     "key": "setting5",
     "value": {
      "key5": "value5"
     },
     "type": "added"
    },
    {
     "key": "setting6",
     "children": [
      {
       "key": "doge",
       "children": [
        {
         "key": "wow",
         "value1": "",
         "value2": "so much",
         "type": "changed"
        }
       ],
       "type": "nested"
      },
      {
       "key": "key",
       "value": "value",
       "type": "unchanged"
      },
      {
       "key": "ops",
       "value": "vops",
       "type": "added"
      }
     ],
     "type": "nested"
    }
   ],
   "type": "nested"
  },
  {
   "key": "group1",
   "children": [
    {
     "key": "baz",
     "value1": "bas",
     "value2": "bars",
     "type": "changed"
    },
    {
     "key": "foo",
     "value": "bar",
     "type": "unchanged"
    },
    {
     "key": "nest",
     "value1": {
      "key": "value"
     },
     "value2": "str",
     "type": "changed"
    }
   ],
   "type": "nested"
  },
  {
   "key": "group2",
   "value": {
    "abc": 12345,
    "deep": {
     "id": 45
    }
   },
   "type": "deleted"
  },
  {
   "key": "group3",
   "value": {
    "deep": {
     "id": {
      "number": 45
     }
    },
    "fee": 100500
   },
   "type": "added"
  }
 ]
//console.log(JSON.stringify(getStylish(massiv, null, 2)));

console.log(getStylish(massiv));
