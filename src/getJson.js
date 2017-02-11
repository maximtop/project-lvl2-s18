const getJson = (ast) => {
  console.log(ast);
  return ast.reduce((acc, obj) => {
    acc[obj.name] = {
      type: obj.type,
      oldValue: obj.oldValue,
      newValue: obj.newValue,
      children: obj.children instanceof Array ? getJson(obj.children) : obj.children,
    };
    return acc;
  }, {})
};

export default getJson;
