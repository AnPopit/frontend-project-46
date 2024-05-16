//const json = 'путь до файла'; // process.cwd() экпортировать в файлах, сюда импортировать и обернукть все в path.resolve([...paths])

//const obj = JSON.parse(json);

const parsing = (filepath) => {
    const filePath = path.resolve(process.cwd(), filepath);
    //const fileExt = path.extname(filepath);
    const file = fs.readFileSync(filePath);
    return JSON.parse(file);
}