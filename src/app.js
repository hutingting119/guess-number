'use strict'

let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let answerGenerator = require('./models/answerGenerator');
let judgment = require('./models/judgment');

console.log(`Welcome!
Please input your number(6):`);
let answer = answerGenerator.answer() + '';
let count = 5;
rl.on('line', (input)=> {
    receipt(answer, input, count);
    count--;
})

function receipt(answer, input, count) {
    let put = judgment.judNumber(answer, input);
    const inputs=input.split('')[0];
    let tag=0;
  for(let i=0;i<inputs.length-1;i++){
      for(let j=1;j<inputs.length;j++){
      if(inputs[i]===inputs[j]){
          tag=1;
      }}
  }
    if (count === 0) {
        console.log("Game Over");
        rl.close();
    }
     else if (tag===1) {
      console.log('Cannot input duplicate numbers!');
     }

    else if (put === '4A0B') {
        console.log("Congratulations!");
        rl.close();
    } else {
        console.log(`${put}
Please input your number(${count}): `);
    }
}

