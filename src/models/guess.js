const judgment = require('./judgment');
const AnswerGenerator = require('./answerGenerator');
class Guess {
    static guess(input) {
        const answer = AnswerGenerator.answer();
        return judgment.judNumber(answer, input);
    }
}

module.exports = Guess;





