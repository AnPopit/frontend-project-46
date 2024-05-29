// const json = 'путь до файла'; // process.cwd() экпортировать в файлах, сюда импортировать и обернукть все в path.resolve([...paths])

// const obj = JSON.parse(json);
import yaml from 'js-yaml';

const parsing = (file, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
      return yaml.load(file, 'utf8');
    case '.yaml':
      return yaml.load(file, 'utf8');
  }
};

export default parsing;
