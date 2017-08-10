const fs = require('fs');
const argv = require('yargs').argv;

const buildDb = () => {
  let db = fs.readdirSync(argv.apiDir)
    .map((file) => {
      const fileContent = fs.readFileSync(argv.apiDir + '/' + file, 'utf8');
      let fileName = file.split('.')[0];
      return '"' + fileName + '": ' + fileContent
    })
    .join(',')
  fs.writeFileSync(argv.dbFile, '{' + db + '}');
}

fs.watch(argv.apiDir, (e, file) => {
  if (file) {
    buildDb();
  }
});

buildDb();