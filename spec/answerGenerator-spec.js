'use strict'
const AnswerGenerator = require('../src/app');

describe('answerGenerator', ()=> {
    
    it('should generate answer', ()=> {
        const isUnique = (item, index, array)=> {
            return array.lastIndexOf(item) === index;
        };
        const answer = AnswerGenerator.randomNumber();
        expect(answer.length).toEqual(4);
        expect(answer.every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.randomNumber()).not.toEqual(AnswerGenerator.randomNumber());
    })

})


