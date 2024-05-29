import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const filePath = path.resolve(process.cwd(), './__fixtures__/result1.txt');
const file = fs.readFileSync(filePath, 'utf8');

const file1 = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

test('gendiff', () => {
  expect(genDiff('./file1.json', './file2.json')).toEqual(file);
  expect(genDiff('./file1.yaml', './file2.yaml')).toEqual(file);
});
