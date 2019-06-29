var randomLetter = randomLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"


//Generates random letter
randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);

//Uses random letter generated above to select a random letter from the array  
function Guess() {
      randomLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(randomLetter);

}


//create varaiables for wins, losses, number of attempts left and max ammount of attempts allowed
var won = 0;
var lost = 0;
var maxAttempts = 10;
var guessesRemaining = [];


//Reckognize user input
//Look up .onkeyup to capture inpute
document.onkeyup = function (event) {
      var playerGuess = event.key;

    
      // If user guess is equal to the randomLetter, increase wins by 1, reset number of guesses, max attempts and provide a win image 
  if (playerGuess === randomLetter) {
     won++;
      maxAttempts = 10;
        guessesRemaining = [];
            //provide a win image 

         }


      //if user guess does not equal rndomLetter, decrease maxAttempts by 1(--) tried following syntax of writing "function" before function name and it wasnt working. Is this due to the function name already being assigned on line 10? 
         Guess();
      if (playerGuess !== randomLetter) {
          maxAttempts--;
        }
      
      if (maxAttempts == 0) {
            lost++;
              guessesRemaining = []
                maxAttempts = 10;
            //provdie a lost image
      }

      
      
      //look up .push method 
      if (guessesRemaining.indexOf(playerGuess) >= 0) {

      } else {

            guessesRemaining.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = guessesRemaining;
            // console.log(guessesRemaining);
      } 

      
      // inpute the values/scores to the HTML
      
      document.getElementById('attempts').innerHTML = maxAttempts;

      document.getElementById('won').innerHTML = won;

      document.getElementById('lost').innerHTML = lost;

      




}