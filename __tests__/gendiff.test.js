import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const filePath = path.resolve(process.cwd(), './__fixtures__/result1.txt');
const file = fs.readFileSync(filePath, 'utf8');

test('gendiff', () => {
  expect(genDiff('./file1.json', './file2.json')).toEqual(file);
  expect(genDiff('./file1.yaml', './file2.yaml')).toEqual(file);
});