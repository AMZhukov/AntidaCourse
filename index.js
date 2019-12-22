'use strict';
const fs = require('fs');

console.time("Конвертация названия файла заняла:");

const convertedFile = fileName => {
    let fileContent = fs.readFileSync(fileName, 'utf8'); // Read file synchrony
    let currentNameFile = '';
    for (let i = 0; i < fileName.length; i++) {
        if (fileName[i] !== ' ' || fileName[i - 1] !== ' ') {
            currentNameFile += fileName[i];
        }
    }
    return fs.writeFileSync(`converted_${currentNameFile}.txt`, `${fileContent}`,'utf8'); // Create file synchrony
};
convertedFile('Hello   world!    NodeJS     RULES!.txt');
console.timeEnd('Конвертация названия файла заняла:');