import _ from 'lodash';

const genFlatJsonDiff = (data1, data2) => {
  const object1 = JSON.parse(data1);
  const object2 = JSON.parse(data2);
  const keys = _.uniq(_.concat(_.keys(object1), _.keys(object2)));
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

export default genFlatJsonDiff;
