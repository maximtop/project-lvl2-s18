const getJson = ast => ast.reduce((acc, obj) => ({
  ...acc,
  [obj.name]: {
    type: obj.type,
    oldValue: obj.oldValue,
    newValue: obj.newValue,
    children: obj.children instanceof Array ? getJson(obj.children) : obj.children,
  },
}), {});

export default ast => JSON.stringify(getJson(ast), null, 2);
