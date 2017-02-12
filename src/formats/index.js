import plain from './plain';
import object from './object';
import json from './json';

const formats = { plain, object, json };

export default format => formats[format];
