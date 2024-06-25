import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const getFixturePathStylish = getFixturePath('stylish_result.txt');
const getFixturePathPlain = getFixturePath('plain_result.txt');
const getFixturePathJson = getFixturePath('json_result.txt');

const fileStylish = fs.readFileSync(getFixturePathStylish, 'utf8');

const filePlain = fs.readFileSync(getFixturePathPlain, 'utf8');

const fileJson = fs.readFileSync(getFixturePathJson, 'utf8');

const pathJson1 = getFixturePath('file1.json');
const pathJson2 = getFixturePath('file2.json');
const pathYaml1 = getFixturePath('file1.yml');
const pathYaml2 = getFixturePath('file2.yml');

test('stylish', () => {
  expect(genDiff(pathJson1, pathJson2, 'stylish')).toEqual(fileStylish);
  expect(genDiff(pathYaml1, pathYaml2, 'stylish')).toEqual(fileStylish);
});

test('plain', () => {
  expect(genDiff(pathJson1, pathJson2, 'plain')).toEqual(filePlain);
  expect(genDiff(pathYaml1, pathYaml2, 'plain')).toEqual(filePlain);
});

test('json', () => {
  expect(genDiff(pathJson1, pathJson2, 'json')).toEqual(fileJson);
  expect(genDiff(pathYaml1, pathYaml2, 'json')).toEqual(fileJson);
});
