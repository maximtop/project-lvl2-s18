import gendiff from '../src/index.js';

const expected = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

test('Check diff on flat json data', () => {
  const path1 = '__tests__/test1.json';
  const path2 = '__tests__/test2.json';
  const actual = gendiff(path1, path2);
  expect(actual).toBe(expected);
});

test('Check diff on flat yaml data', () => {
  const path1 = '__tests__/test1.yml';
  const path2 = '__tests__/test2.yaml';
  const actual = gendiff(path1, path2);
  expect(actual).toBe(expected);
});