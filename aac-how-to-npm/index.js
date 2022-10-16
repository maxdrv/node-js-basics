const {format} = require('date-fns');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))  // usage of dependency aka production code

// to install dev dependency
// npm i nodemon --save-dev