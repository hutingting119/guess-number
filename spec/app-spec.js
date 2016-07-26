'use strict'
const app = require('../src/app');

describe('guess-number', () => {
    let answer = '1234';
    let guess = '1234';
    it('should print text', () => {
        let put = app.guessNumber(answer, guess);
        let test = '4A0B';
        expect(put).toEqual(test);

    });
});