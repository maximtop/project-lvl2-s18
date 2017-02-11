import _ from 'lodash';

const tabSize = 4;

const indent = (lvl) => {
  return _.repeat(' ', lvl * tabSize);
};

const stringify = (element, lvl) => {
  if (typeof element === 'object') {
    const result = JSON.stringify(element, null, indent(lvl+1));
    const last = result.slice(-1);
    return `${result.slice(0, -1)}${indent(lvl)}${last}`;
  }
  return element;
};

const getString = (ast) => {
  const iter = (ast, lvl) => {
    const string = ast.reduce((acc, obj) => {
      if (obj.type === 'unchanged') {
        return `${acc}\n${indent(lvl)}${obj.name}: ${obj.children instanceof Array ? iter(obj.children, lvl + 1) : stringify(obj.oldValue, lvl)}`;
      }
      if (obj.type === 'changed') {
        return `${acc}\n${indent(lvl).slice(0, -2)}+ ${obj.name}: ${obj.newValue}\n${indent(lvl).slice(0, -2)}- ${obj.name}: ${obj.oldValue}`;
      }
      if (obj.type === 'added') {
        return `${acc}\n${indent(lvl).slice(0, -2)}+ ${obj.name}: ${stringify(obj.newValue, lvl)}`;
      }
      if (obj.type === 'removed') {
        return `${acc}\n${indent(lvl).slice(0, -2)}- ${obj.name}: ${stringify(obj.oldValue, lvl)}`;
      }
    }, '');
    return `{${string}\n${indent(lvl)}}`;
  };
  return `${iter(ast, 1).slice(0, -(tabSize + 1))}}`;
};

export default getString;