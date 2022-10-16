const fs = require('fs');
const fsPromises = require('fs').promises
const path = require('path')

// this statements will be executet async because node does this!!!

// // dot would be current working dir, where you call node from terminal
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

console.log('after read')

// process is available variable - we do not need to import it
process.on('uncaughtException', err => {
    console.error(`There was an uncaught exception: ${err}`)
    process.exit(1)
})

//
// // callback hell - we need to do this to maintain order (node async)
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
//     if (err) throw err;
//     console.log('write complete')
//
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
//         if (err) throw err;
//         console.log('append complete')
//
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'new reply.txt'), (err) => {
//             if (err) throw err;
//             console.log('rename complete')
//         })
//     })
// })


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
        console.log(err)
    }
}

fileOps()