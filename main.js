var msg = 'Good morning Welcome to Jacascript.'
console.log(msg); //print message in msg

var peg = require("pegjs");
const fs = require("fs");

grammarFile = 'grammar.pegjs'

grammar = fs.readFileSync(grammarFile,'utf8')
//console.log(grammar); //print grammar.pegjs code

var parser = peg.generate(grammar)

var input1 = '441008250'
var output1 = parser.parse(input1)
console.log(output1); //print amount of input1