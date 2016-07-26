'use strict'
const AnswerGenerator = require('../src/models/answerGenerator');
describe('answerGenerator', ()=> {

    it('should generate answer', ()=> {
        const isUnique = (item, index, array)=> {
            return array.lastIndexOf(item) === index;
        };
        
        const answer = AnswerGenerator.answer();
        expect(answer.length).toEqual(4);
        expect(answer.every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.answer()).not.toEqual(AnswerGenerator.answer());
    })

})


