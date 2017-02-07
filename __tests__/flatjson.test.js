import flatJson from '../src/flatjson';

const data1 = `{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22"
}`;

const data2 = `{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}`;

const expected = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

test('Generate diff on flat json data', () => {
  expect(flatJson(data1, data2)).toBe(expected);
});