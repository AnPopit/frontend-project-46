import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const fileStylish = fs.readFileSync(path.resolve(process.cwd(), './__fixtures__/stylish_result.txt'), 'utf8');

const filePlain = fs.readFileSync(path.resolve(process.cwd(), './__fixtures__/plain_result.txt'), 'utf8');

const fileJson = fs.readFileSync(path.resolve(process.cwd(), './__fixtures__/json_result.txt'), 'utf8');

test('stylish', () => {
  expect(genDiff('./file1.json', './file2.json', 'stylish')).toEqual(fileStylish);
  expect(genDiff('./file1.yaml', './file2.yaml')).toEqual(fileStylish);
});

test('plain', () => {
  expect(genDiff('./file1.json', './file2.json', 'plain')).toEqual(filePlain);
  expect(genDiff('./file1.yaml', './file2.yaml')).toEqual(filePlain);
});

test('json', () => {
  expect(genDiff('./file1.json', './file2.json', 'json')).toEqual(fileJson);
  expect(genDiff('./file1.yaml', './file2.yaml')).toEqual(fileJson);
});
