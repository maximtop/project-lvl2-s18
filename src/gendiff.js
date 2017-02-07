import fs from 'fs';
import genFlatJsonDiff from './flatjson';

const getDataByPath = path => fs.readFileSync(path);

const gendiff = (path1, path2) => {
  const [data1, data2] = [getDataByPath(path1), getDataByPath(path2)];
  return (genFlatJsonDiff(data1, data2));
};

export default gendiff;
