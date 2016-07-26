class CompareNumber {

    static judNumber(answer, guess) {
        const answers = answer.split('');
        const guesses = guess.split('');

        const rightDigitCount = guesses.filter(c=>answers.includes(c)).length;
        let a = guesses.filter(c=>answers.indexOf(c) === guesses.indexOf(c)).length;

        let b = rightDigitCount - a;

        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;