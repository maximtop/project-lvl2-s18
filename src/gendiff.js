import commander from 'commander';
import fs from 'fs';
import genFlatJsonDiff from './flatjson';

const getDataByPath = path => fs.readFileSync(path);

const gendiff = (firstConfigPath, secondConfigPath) => {
  let data1;
  let data2;
  if (typeof firstConfigPath === 'undefined' && typeof firstConfigPath === 'undefined') {
    const program = commander;
    program
      .version('1.0.0')
      .description('Compares two configuration files and shows a difference.')
      .arguments('<firstConfig> <secondConfig>')
      .action((firstConfig, secondConfig) => {
        [data1, data2] = [getDataByPath(firstConfig), getDataByPath(secondConfig)];
      });
    program
      .option('-f, --format [type]', 'Output format')
      .parse(process.argv);
  } else {
    [data1, data2] = [getDataByPath(firstConfigPath), getDataByPath(secondConfigPath)];
  }
  console.log(genFlatJsonDiff(data1, data2));
};

export default gendiff;
