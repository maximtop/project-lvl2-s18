import json from './json';
import yml from './yaml';
import ini from './ini';

const extensions = { yml, yaml: yml, json, ini };

export default extension => extensions[extension];
