'use strict'
const judgmeng= require('./models/judgment');
const result=require('./models/answerGenerator');

function guessNumber(answer, guess) {
    const put = judgmeng.judNumber(answer, guess);
    return put;

}

function randomNumber(inputs) {
    const put=result.answer(inputs);
    return put;
}

function guess() {

}

exports.guessNumber = guessNumber;
exports.randomNumber=randomNumber;