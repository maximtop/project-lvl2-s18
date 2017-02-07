import gendiff from '../src/index.js';

test('Check diff on flat json data', () => {
  const actual = gendiff('test1.json', 'test2.json');
  const expected = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;
  expect(actual).toBe(expected);
});