var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // This array will hold what we guess
    var guessedLetters = [];

    // This variable will be randomly assigned one of the three letters
    var letterToGuess = null;

    // This is what we'll use to count down
    var guessesLeft = 9;

    // This is the counter for wins/losses
    var wins = 0;
    var losses = 0;
  document.onkeyup = function(event) {
    alert("working!!");
        // Lowercase the letter
      var letter = String.fromCharCode(event.keyCode).toLowerCase();

      // We'll check if there's a match.
      if (letter === letterToGuess) {

        // If there is then we win and we'll update the HTML to display the win.
        wins++;


        //user has to make choices of letters//