import fs from 'fs';
import path from 'path';
import parser from './parsers/parser';
import differ from './differ';

const getDataByPath = confPath => fs.readFileSync(confPath);

const gendiff = (path1, path2) => {
  const [data1, data2] = [getDataByPath(path1), getDataByPath(path2)];
  const extension = path.extname(path1).substr(1);
  const object1 = parser(extension)(data1);
  const object2 = parser(extension)(data2);
  return (differ(object1, object2));
};

export default gendiff;
