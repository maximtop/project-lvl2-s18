import fs from 'fs';
import path from 'path';
import parser from './parsers';
import differ from './differ';
import getFormat from './formats';

const getDataByPath = confPath => fs.readFileSync(confPath, 'utf-8');

const gendiff = (path1, path2, format = 'object') => {
  const [data1, data2] = [getDataByPath(path1), getDataByPath(path2)];
  const extension = path.extname(path1).substr(1);
  const object1 = parser(extension)(data1);
  const object2 = parser(extension)(data2);
  const string = getFormat(format)(differ(object1, object2));
  // const string = JSON.stringify(differ(object1, object2), null, 2);
  return string;
};

export default gendiff;
