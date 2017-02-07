import fs from 'fs';
import genFlatJsonDiff from './flatjson';

const getDataByPath = path => fs.readFileSync(path);

const gendiff = (firstConfigPath, secondConfigPath) => {
  const [data1, data2] = [getDataByPath(firstConfigPath), getDataByPath(secondConfigPath)];
  return (genFlatJsonDiff(data1, data2));
};

export default gendiff;
