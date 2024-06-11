const getStylish = (tree) => {
    const margin = '.';
    let n = 4;
    const type = 'type';
    const key1 = 'key';
    const value = 'value';
    const value1 = 'value1';
    const value2 = 'value2';
    const children = 'children';
    const getMargin = (depthFun, count) => margin.repeat(count * (depthFun));
    const iter = (node, depth) => {
    const result = node.map((obj) => {
    const keys = Object.keys(obj);
    const res = keys.map((key) => {
    if (key === 'type') {

        if (obj[type] === 'added') {     
            return `${margin.repeat(4 * depth - 2)}+ ${obj[key1]}: ${obj[value]}`;
        }
        if (obj[type] === 'unchanged') {     
            return `${margin.repeat(4 * depth - 2)}  ${obj[key1]}: ${obj[value]}`;
        }
        if (obj[type] === 'changed') {  
            return `${margin.repeat(4 * depth - 2)} \n${margin.repeat(4 * depth - 2)}+ ${obj[key1]}: ${obj[value2]}`
        }
        if (obj[type] === 'deleted') {  
            return `${margin.repeat(4 * depth - 2)}- ${obj[key1]}: ${obj[value]}`
        }
        if (obj[type] === 'nested') {  
            return `${margin.repeat(4 * depth - 2)}  ${obj[key1]}: ${iter(obj[children], depth + 1)}`
        }
    }
    })
    return `${res.join('')}`;
    })
   return `{\n${result.join('\n')}\n${margin.repeat(4 * depth - n)}}`;
    };
return iter(tree, 1)
};

const massiv = [
    {
     "key": "common",
     "children": [
      {
       "key": "глубина должна быть два 1",
       "value": false,
       "type": "added"
      },
      {
       "key": "глубина должна быть два 2",
       "value": "Value 1",
       "type": "unchanged"
      },
      {
       "key": "глубина должна быть два 3",
       "value": 200,
       "type": "deleted"
      },
      {
        "key": "глубина должна быть два 4",
        "children": [
            {
                "key": "очень глубоко",
                "value": 200,
                "type": "deleted"
               },

        ],
        "type": "nested"
       },
     ],
     "type": "nested"
    },
    {
        "key": "test",
        "value": 200,
        "type": "deleted"
    }
   ]
console.log(getStylish(massiv));
