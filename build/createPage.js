const { mkdirSync, writeFileSync } = require('fs');
const { getDirectoriesBasenames } = require('./utils.js');
const dirs = require('./dirs');

const [execPath, selfPath, pageName] = process.argv;
const existingPages = getDirectoriesBasenames(`${dirs.pages}`);

if (existingPages.includes(pageName)) {
  throw new Error(`Page with the name ${pageName} already exists`);
}

const pagePath = `${dirs.pages}/${pageName}`;

//Create Directory
mkdirSync(pagePath);

//styles
writeFileSync(`${pagePath}/${pageName}.scss`, `@import '~@/styles/vars';`);
//markup
writeFileSync(
  `${pagePath}/${pageName}.pug`,
  `extends ../layout.pug 

block content
`
);
//js
writeFileSync(`${pagePath}/${pageName}.js`, `import './${pageName}.scss';`);
