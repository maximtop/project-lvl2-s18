import commander from 'commander';
import fs from 'fs';
import flatJson from './flatjson';

const getDataByPath = (path) => {
  data = fs.readFileSync(path);
  console.log(data);
  return data;
};

const gendiff = (firstConfigPath, secondConfigPath) => {
  if (typeof firstConfigPath === 'undefined' && typeof firstConfigPath === 'undefined') {
    const program = commander;
    program
      .version('1.0.0')
      .description('Compares two configuration files and shows a difference.')
      .arguments('<firstConfig> <secondConfig>')
      .action((firstConfig, secondConfig) => {
        flatJson(getDataByPath(firstConfig), getDataByPath(secondConfig));
      });
    program
      .option('-f, --format [type]', 'Output format')
      .parse(process.argv);
  }
  flatJson(getDataByPath(firstConfigPath), getDataByPath(secondConfigPath));
};

export default gendiff;
