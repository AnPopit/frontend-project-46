const getValue = (value) => {
  if (typeof (value) === 'boolean' || value === null || typeof (value) === 'number') {
    return value;
  }
  if (value !== null && typeof value === 'object') {
    return '[complex value]';
  }
  return `'${value}'`;
};

const getPlain = (tree) => {
  const iter = (node, path) => {
    const result = node.map((obj) => {
      const newAncestry = path === '' ? `${obj.key}` : `${path}.${obj.key}`;
      switch (obj.type) {
        case 'added':
          return `Property '${newAncestry}' was added with value: ${getValue(obj.value)}`;
        case 'unchanged':
          return '';
        case 'changed':
          return `Property '${newAncestry}' was updated. From ${getValue(obj.value1)} to ${getValue(obj.value2)}`;
        case 'deleted':
          return `Property '${newAncestry}' was removed`;
        case 'nested':
          return iter(obj.children, newAncestry);
        default:
          throw new Error('Unknown type!');
      }
    });
    const res = result.join('\n');
    const resFil = res.replace(/^\s*[\r\n]/gm, '');
    return resFil;
  };
  return iter(tree, '');
};

export default getPlain;

const m = [
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

console.log(getPlain(m))