const {format} = require('date-fns');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))  // usage of dependency aka production code

// to install dev dependency
// npm i nodemon --save-dev

// use scripts to run what you want
// npm run dev


console.log('hello');

const {v4: uuid} = require('uuid');

console.log(uuid())

// updating versions
// 9.5.1  major minor patch
//     "uuid": "9.0.0"  - do not update anything, use static version
//     "uuid": "^9.0.0"  - update minor version and patch
//     "uuid": "~9.0.0"  - update only patch
//     "uuid": "*"  - always use absolute latest version


// how to uninstall dependency
// npm rm nodemon -g // for global vesion
// npm rm nodemon -D // for dev dependency
// npm rm nodemon // dependency