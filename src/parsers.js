import yaml from 'js-yaml';

const parsing = (file, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
      return yaml.load(file, 'utf8');
    case '.yaml':
      return yaml.load(file, 'utf8');
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};

export default parsing;
