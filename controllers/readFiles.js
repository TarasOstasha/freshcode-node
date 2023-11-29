
const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
const encoding = { encoding: 'utf-8' };

async function logUsers(folder) {
    try {
      const filePath = resolve(folder);
      const contents = await readFile(filePath, encoding);
      console.log(contents);
    } catch (err) {
      console.error(err.message);
    }
  }
  

module.exports = { logUsers };