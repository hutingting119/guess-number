
const  app= require('../app');



class Guess {
    static guess(input){
        const answer=app.randomNumber();
        return app.guessNumber(answer, input);
    }
    



}


module.exports = Guess;





