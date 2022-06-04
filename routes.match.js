const fs = require("fs");

const textRoutes = fs.readFileSync('./src/router/index.js', 'utf-8');
const reg = new RegExp(/['"]?path['"]?:\s*['"]?(.+?)['"]?,/gi);

const path = [];

let res;
while((res = reg.exec(textRoutes)) != null){
    if(!res[1].includes(':')) path.push(res[1]);
}

//remove duplicate
const finalPath = [...new Set(path)];

console.log('Matched routes: ', finalPath, "\n");

module.exports = finalPath;