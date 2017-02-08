import jsonParser from './json';
import yamlParser from './yaml';

const extensions = {
  yml: yamlParser,
  yaml: yamlParser,
  json: jsonParser,
};

const parser = extension => extensions[extension];

export default parser;
