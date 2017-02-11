const getJson = (ast) => {
  console.log(ast);
  return ast.reduce((acc, obj) => {
    acc[obj.name] = {
      type: obj.type,
      data: obj.data instanceof Array ? getJson(obj.data) : obj.data,
    };
    return acc;
  }, {})
};

export default getJson;
