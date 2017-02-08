import yaml from 'js-yaml';

const yamlParser = data => yaml.safeLoad(data);

export default yamlParser;
