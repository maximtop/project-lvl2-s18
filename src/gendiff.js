import commander from 'commander';

const gendiff = () => {
  const program = commander;
  program
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .arguments('<firstConfig> <secondConfig>')
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
};

export default gendiff;
