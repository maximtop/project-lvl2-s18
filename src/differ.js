import _ from 'lodash';

const differ = (object1, object2) => {
  const keys = _.union(Object.keys(object1), Object.keys(object2));
  return _.reduce(keys, (acc, key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      const value1 = object1[key];
      const value2 = object2[key];
      if(typeof(value1) === 'object' || typeof(value2) === 'object') {
        acc.push({name:key, data: differ(value1, value2), type: 'unchanged' });
        return acc;
      }
      if (value1 === value2) {
        acc.push({name:key, data:value2, type: 'unchanged'});
        return acc;
      }
      acc.push({name:key, data:value2, type: 'added'});
      acc.push({name:key, data:value1, type: 'removed'});
      return acc;
    }
    if (_.has(object1, key)) {
      acc.push({name:key, data:object1[key], type: 'removed'});
      return acc;
    }
    acc.push({name:key, data:object2[key], type: 'added'});
    return acc;
  }, []);
};

export default differ;
