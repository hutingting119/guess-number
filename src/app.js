'use strict'
const result = require('./models/judgment');

function guessNumber(answer, guess) {
    const put = result.judNumber(answer, guess);
    return put;

}


exports.guessNumber = guessNumber;