const checkType = (type) => {
  return type === 'added' ? '+' : type === 'removed' ? '-' : ' ';
};

const getString = (json) => {
  return Object.keys(json).reduce((acc, key) => {
    const object = json[key];
    return `${acc}\n   ${checkType(object.type)} ${key}: ${typeof object.data === 'object' && Object.keys(object.data).length > 1 ? getString(object.data) : JSON.stringify(object.data, null, '\t')}`;
  }, '');
};

export default getString;