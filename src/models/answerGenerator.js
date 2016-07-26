class AnswerGenerator {
    static answer() {
        let inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let puts = [];

        for (let i = 0; i < 4; i++) {
            const randomNumber = parseInt(Math.random() * inputs.length);
            puts.push((inputs.splice(randomNumber, 1))[0]);
        }
        return puts;

    }
}
module.exports = AnswerGenerator;