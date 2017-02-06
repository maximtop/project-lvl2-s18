import commander from 'commander';

const gendiff = () => {
  const program = commander;
  let firstConfigValue;
  let secondConfigValue;
  program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<firstConfig> <secondConfig>')
    .action((firstConfig, secondConfig) => {
      firstConfigValue = firstConfig;
      secondConfigValue = secondConfig;
    });
  program
    .option('-f, --format [type]', 'Output format');
  program
    .parse(process.argv);
  if (typeof firstConfigValue === 'undefined' || typeof secondConfigValue === 'undefined') {
    console.error('no configuration given!');
    process.exit(1);
  }
};

export default gendiff;
