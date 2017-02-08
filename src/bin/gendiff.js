#!/usr/bin/env node

import program from 'commander';
import gendiff from '../gendiff';
import pjson from '../../package.json';

program
  .version(pjson.version)
  .description(pjson.description)
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => {
    console.log(gendiff(firstConfig, secondConfig));
  })
  .parse(process.argv);
