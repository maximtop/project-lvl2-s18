import fs from 'fs';
import path from 'path';
import parser from './parsers';
import differ from './differ';
import getJson from'./getJson';
import getString from'./getString';

const getDataByPath = confPath => fs.readFileSync(confPath, 'utf-8');

const gendiff = (path1, path2) => {
  const [data1, data2] = [getDataByPath(path1), getDataByPath(path2)];
  const extension = path.extname(path1).substr(1);
  const object1 = parser(extension)(data1);
  const object2 = parser(extension)(data2);
  const json = getJson(differ(object1, object2));
  console.log(JSON.stringify(json, null, '  '));
  return getString(json);
};

export default gendiff;
