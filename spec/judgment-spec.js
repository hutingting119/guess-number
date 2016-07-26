'use strict'
const judgment = require('../src/models/judgment');
describe('guess-number', () => {
    const input = '1234';
    it('judgeNumber', ()=> {
        [
            {
                number: '1234',
                expectResult: '4A0B'
            },
            {
                number: '4321',
                expectResult: '0A4B'
            },
            {
                number: '5678',
                expectResult: '0A0B'
            }
        ].forEach(item=> {
            expect(judgment.judNumber(input, item.number)).toEqual(item.expectResult);
        });
    })
})

