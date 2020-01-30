const path = require('path');

// use to extract the file which is run in the  server
module.exports =path.dirname(process.mainModule.filename);