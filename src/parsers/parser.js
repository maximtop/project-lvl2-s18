import parseJson from './json';
import parseYaml from './yaml';
import parseIni from './ini';

const extensions = {
  yml: parseYaml,
  yaml: parseYaml,
  json: parseJson,
  ini: parseIni,
};

const parser = extension => extensions[extension];

export default parser;
