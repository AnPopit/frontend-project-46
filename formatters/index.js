import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

const getFormatter = (file, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(file);
    case 'plain':
      return getPlain(file);
    case 'json':
      return getJson(file);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};

export default getFormatter;
