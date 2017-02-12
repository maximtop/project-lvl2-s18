import chalk from 'chalk';
import _ from 'lodash';

const isComplex = (obj) => {
  if (typeof obj === 'object') {
    return 'complex value';
  }
  return `value: ${obj}`;
};

const genFullName = (name, parent) => `${parent !== undefined ? `${parent}.` : ''}${name}`;

const getPlainText = (ast) => {
  const iter = (astTree, parent) => astTree.reduce((acc, obj) => {
    if (obj.type === 'removed') {
      return [...acc, `Property ${chalk.red(genFullName(obj.name, parent))} was removed`];
    }
    if (obj.type === 'added') {
      return [...acc, `Property ${chalk.green(genFullName(obj.name, parent))} was added with ${chalk.green(isComplex(obj.newValue))}`];
    }
    if (obj.type === 'changed') {
      return [...acc, `Property ${chalk.yellow(genFullName(obj.name, parent))} was updated. From ${chalk.yellow(obj.oldValue)} to ${chalk.yellow(obj.newValue)}`];
    }
    if (obj.type === 'unchanged' && obj.children !== undefined) {
      return [...acc, iter(obj.children, obj.name)];
    }
    return acc;
  }, []);
  return _.flatten(iter(ast)).join('\n');
};

export default getPlainText;
