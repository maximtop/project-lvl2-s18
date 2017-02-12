import _ from 'lodash';

const tabSize = 4;

const indent = (lvl, modifier) => (modifier !== undefined ?
  _.repeat(' ', (lvl * tabSize) + modifier) :
  _.repeat(' ', lvl * tabSize));

const stringify = (element, lvl) => {
  if (typeof element === 'object') {
    const result = JSON.stringify(element, null, indent(lvl, 4));
    const closingBracket = result.slice(-1);
    return `${result.slice(0, -1)}${indent(lvl)}${closingBracket}`;
  }
  return element;
};

const getString = (ast) => {
  const iter = (astTree, lvl) => {
    const string = astTree.reduce((acc, obj) => {
      let newAcc;
      if (obj.type === 'unchanged') {
        newAcc = `${acc}\n${indent(lvl)}${obj.name}: ${obj.children instanceof Array ? iter(obj.children, lvl + 1) : stringify(obj.oldValue, lvl)}`;
      }
      if (obj.type === 'changed') {
        newAcc = `${acc}\n${indent(lvl, -2)}+ ${obj.name}: ${obj.newValue}\n${indent(lvl, -2)}- ${obj.name}: ${obj.oldValue}`;
      }
      if (obj.type === 'added') {
        newAcc = `${acc}\n${indent(lvl, -2)}+ ${obj.name}: ${stringify(obj.newValue, lvl)}`;
      }
      if (obj.type === 'removed') {
        newAcc = `${acc}\n${indent(lvl, -2)}- ${obj.name}: ${stringify(obj.oldValue, lvl)}`;
      }
      return newAcc;
    }, '');
    return `{${string}\n${indent(lvl - 1)}}`;
  };
  return `${iter(ast, 1)}`;
};

export default getString;
