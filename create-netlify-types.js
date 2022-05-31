const fs = require('fs');
const { createNetlifyTypes } = require('netlify-ts');

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function main() {
  // The Name attribute of each collection is used to generate the interface name
  const types = createNetlifyTypes('public/admin/config.yml');

  var capitalizedTypes = types.replace(/(?<=interface\s+).*?(?=\s+{)/gs, capitalize);

  fs.writeFileSync('./src/core/lib/netlify-types.ts', capitalizedTypes);
}

main();
