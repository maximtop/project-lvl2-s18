import _ from 'lodash';

const differ = (object1, object2) => {
  const keys = _.union(Object.keys(object1), Object.keys(object2));
  const string = _.reduce(keys, (acc, key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] === object2[key]) {
        return `${acc}\n    ${key}: ${object2[key]}`;
      }
      return `${acc}\n  + ${key}: ${object2[key]}\n  - ${key}: ${object1[key]}`;
    }
    if (_.has(object1, key)) {
      return `${acc}\n  - ${key}: ${object1[key]}`;
    }
    return `${acc}\n  + ${key}: ${object2[key]}`;
  }, '');
  return `{${string}\n}`;
};

export default differ;
