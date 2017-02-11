import chalk from 'chalk';
import _ from 'lodash';

const isComplex = (obj) => {
  if (typeof obj === 'object') {
    return 'complex value';
  }
  return `value: ${obj}`;
};

const genFullName = (name, parent) => {
  return `${parent !== undefined ? `${parent}.` : ''}${name}`;
};

const getPlainText = (ast) => {
  const iter = (astTree, parent) => {
    return astTree.reduce((acc, obj) => {
      if (obj.type === 'removed') {
        acc.push(`Property ${chalk.red(genFullName(obj.name, parent))} was removed`);
        return acc;
      }
      if (obj.type === 'added') {
        acc.push(`Property ${chalk.green(genFullName(obj.name, parent))} was added with ${chalk.green(isComplex(obj.newValue))}`);
        return acc;
      }
      if (obj.type === 'changed') {
        acc.push(`Property ${chalk.yellow(genFullName(obj.name, parent))} was updated. From ${chalk.yellow(obj.oldValue)} to ${chalk.yellow(obj.newValue)}`);
        return acc;
      }
      if (obj.type === 'unchanged' && obj.children !== undefined) {
        acc.push(iter(obj.children, obj.name));
        return acc;
      }
      return acc;
    }, []);
  };
  return _.flatten(iter(ast)).join('\n');
};

export default getPlainText;
