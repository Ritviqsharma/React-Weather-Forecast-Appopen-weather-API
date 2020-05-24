//For NPM Error Resolve This file is used
const path = require('path');

module.exports = {
  process(src, filename /*, config, options */) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
