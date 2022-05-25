const prompt = require ('prompt-sync')();
let opr = prompt ('Enter operator: ')
let first = parseFloat(prompt ('Enter first parameter: '))
let second = parseFloat(prompt ('Enter second parameter:  '))
if (opr == '+' )
{console.log( first + second )}
else if (opr == '-')
{console.log( first - second)}
else if ( opr == '*')
{console.log (first * second)}
else if (opr = '/')
{console.log( first / second )}