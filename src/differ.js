import _ from 'lodash';

const differ = (object1, object2) => {
  const keys = _.union(Object.keys(object1), Object.keys(object2));
  return _.reduce(keys, (acc, key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      const value1 = object1[key];
      const value2 = object2[key];
      if (typeof (value1) === 'object' || typeof (value2) === 'object') {
        acc.push({ type: 'unchanged', name: key, children: differ(value1, value2) });
        return acc;
      }
      if (value1 === value2) {
        acc.push({ type: 'unchanged', name: key, oldValue: value2 });
        return acc;
      }
      acc.push({ type: 'changed', name: key, oldValue: value1, newValue: value2 });
      return acc;
    }
    if (_.has(object1, key)) {
      acc.push({ type: 'removed', name: key, oldValue: object1[key] });
      return acc;
    }
    acc.push({ type: 'added', name: key, newValue: object2[key] });
    return acc;
  }, []);
};

export default differ;
