// const json = 'путь до файла'; // process.cwd() экпортировать в файлах, сюда импортировать и обернукть все в path.resolve([...paths])

// const obj = JSON.parse(json);

const parsing = (file) => JSON.parse(file);

export default parsing;
