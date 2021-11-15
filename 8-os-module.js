// const amount = 9
// if (amount < 10) {
//     console.log('small number');
// }
// else {
//     console.log('large number');
// }

// console.log(`hey it's my first node app!!!`);

// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// }, 1000)

//Modules
// const john = 'john'
// const peter = 'peter'
// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavors')
// require('./7-mind-grenade')
// console.log(names)


// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi('susan');
// sayHi(names.john)
// sayHi(names.peter)
// console.log(data)

const os = require('os')
// const user = os.userInfo()
// console.log(user)
// console.log(`This system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)