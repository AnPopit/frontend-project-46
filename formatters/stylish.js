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
        return `${getMargin(depth +1)}${key}: ${iter(node[key], depth + 1)}`;
      }
      return `${getMargin(depth + 1)}${key}: ${node[key]}`;
    });
    return `{\n${result.join('\n')}\n${getMargin(depth)}}`;
  };
  return iter(value, dep);
};

const getStylish = (tree) => {
  const offset = 2;
  const offsetMargin = 4; //закр-ся скобки
  const iter = (node, depth) => {
    const result = node.map((obj) => {
      //const keys = Object.keys(obj);
      //const res = keys.map((key1) => {
        //if (key1 === 'type') {
          switch (obj.type) {
            case 'added':
              return `${getMargin(depth, offset)}+ ${obj.key}: ${stringify(obj.value, depth)}`;
            case 'unchanged':
              return `${getMargin(depth, offset)}  ${obj.key}: ${stringify(obj.value, depth)}`;
            case 'changed':
              return `${getMargin(depth, offset)}- ${obj.key}: ${stringify(obj.value1, depth)}\n${getMargin(depth, offset)}+ ${obj.key}: ${obj.value2}`;
            case 'deleted':
              return `${getMargin(depth, offset)}- ${obj.key}: ${stringify(obj.value, depth)}`;
            case 'nested':
              return `${getMargin(depth, offset)}  ${obj.key}: ${iter(obj.children, depth + 1)}`;
            default:
              throw new Error('Unknown type!');
          }
       // }
       // return null;
      });
      //return `${res.join('')}`;
    //});
    return `{\n${result.join('\n')}\n${getMargin(depth, offsetMargin)}}`;
  };
  return iter(tree, 1);
};

export default getStylish;

const m =[
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

 console.log(getStylish(m));
