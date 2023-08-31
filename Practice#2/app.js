//console.log('Wow');

const { log } = require('console')
const Square = require('./square');
const { width } = require('cli');
// common js

const mySq = new Square(3)

console.log(`Area  = ${mySq.area()}`);