'use strict'
const AnswerGenerator = require('../src/models/answerGenerator');
const Guess = require('../src/models/guess');

describe('Guess', ()=> {
    it('should play the game', ()=> {
        spyOn(AnswerGenerator, 'answer').and.returnValue('1234');
        const result = Guess.guess('1234');
        expect(result).toEqual('4A0B');
    })
})