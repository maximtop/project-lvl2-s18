import gendiff from '../src/index';

const expected = `{
    common: {
        setting1: Value 1
      - setting2: 200
        setting3: true
      - setting6: {
            "key": "value"
        }
      + setting4: blah blah
      + setting5: {
            "key5": "value5"
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
    }
  - group2: {
        "abc": "12345"
    }
  + group3: {
        "fee": "100500"
    }
}`;

test('Check diff on json data', () => {
  const path1 = '__tests__/fixtures/before.json';
  const path2 = '__tests__/fixtures/after.json';
  const actual = gendiff(path1, path2);
  expect(actual).toBe(expected);
});

test('Check diff on yaml data', () => {
  const path1 = '__tests__/fixtures/before.yml';
  const path2 = '__tests__/fixtures/after.yaml';
  const actual = gendiff(path1, path2);
  expect(actual).toBe(expected);
});

test('Check diff on ini data', () => {
  const path1 = '__tests__/fixtures/before.ini';
  const path2 = '__tests__/fixtures/after.ini';
  const actual = gendiff(path1, path2);
  expect(actual).toBe(expected);
});