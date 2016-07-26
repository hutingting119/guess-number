'use strict'
const judgmeng= require('./models/judgment');
const result=require('./models/answerGenerator');

function guessNumber(answer, guess) {
    const put = judgmeng.judNumber(answer, guess);
    return put;

}

function randomNumber() {
    const put=result.answer();
    return put;
}

function guess() {
   const guessed=guess();
   return guessed;
}

exports.guessNumber = guessNumber;
exports.randomNumber=randomNumber;
exports.guess=guess;