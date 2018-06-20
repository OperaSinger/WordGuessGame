// game is nowhere near finished, but I will finish and resubmit as soon as it is. 
// I wanted to push what I have so far for the deadline. 
// At the time of this push, I am still working on the limit or verification that all 
// letters in wordChoice have been selected - and that gives a win - HTML to print to 
// the page - how to reset and restart the game - and other bells and whistles for
// the page that I wanted to have styled. - Vale Rideout


        
// declared variables:

var wins = 0;
var losses = 0;
var wordlist = ["stalwart", "brazen", "handiwork", "sacrosanct", "standard", "reciprocity", "reprobate", "asphyxiate", "tribunal", "adrenalin"];
var lettersUsed = [];
var wordBlanks = [];
var guessRem = 0;
var wrongGuess = 0;
var keyIndex = 0;
var wordChoice = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log("wordlist length is " + wordlist.length);
    console.log(wordChoice);


    $("#game").html("<div id='row'><h3 id='wins'>Wins: " + wins + "</h3</div><div id='row'><h3 id='losses'>Losses: " + losses + "</h3></div><div><h3 id='letGuess'>Letters guessed: " + lettersUsed +  "</h3></div><div id='row'><h3 id='guessRem'>Guesses remaining: " + guessRem + "</h3></div><div id='row'><h3 id='wrongGuess'>Wrong guesses: " + wrongGuess + "</h3></div>");

 // this is to 'push' blanks into the array wordBlanks - to later be replaced by 
// the event.key

    for (i = 0; i < wordChoice.length; i++) {
        wordBlanks.push(" _");
        $("#word").html("<h1>" + wordBlanks.join(" ") + "</h1>")
    }
    console.dir(wordBlanks);
    

        // setting keystart to begin game and take in first guess:

document.onkeypress = function(event) {
        console.log(event.key);

        // to push key entered into letters used array:

lettersUsed.push(event.key);
        console.log(lettersUsed);
        $("#letGuess").html("<div><h3>Letters guessed: " + lettersUsed +  "</h3></div>");

        // returns index number of key pressed - in random word:

keyIndex = wordChoice.indexOf(event.key);
        console.log (keyIndex);

    while (keyIndex != -1) {
            // wordBlanks.push(guessIndex);
    
        // This will splice INTO wordBlanks the event.key in its
        // index place - replacing the dashes
    
            wordBlanks.splice(keyIndex, 1, (event.key));
            keyIndex = wordChoice.indexOf(event.key, keyIndex +1);
        }
        console.log(wordBlanks);
        $("#word").html("<h1>" + wordBlanks.join("") + "</h1>")

        
    if (wordChoice.indexOf(event.key) >= 0) {
        console.log("ahhhhh");
        // var audio = new Audio('#');
        // audio.play();

    }
    else {
        console.log("scream!");
        wrongGuess++
        console.log(wrongGuess);
        $("#wrongGuess").html("<div id='row'><h3>Wrong guesses: " + wrongGuess + "</h3></div>");
        // var audio = new Audio('assets/audio/wscream.mp3');
        // audio.play();
    
    }
    
    if (wordBlanks.join("") === wordChoice) {
                console.log(wordBlanks);
                wins++;

                $("#wins").html("<div id='row'><h3>Wins: " + wins + "</h3</div>");
                reset();

                alert("YOU WIN! Play again, why don't you?")
    
}
    
    else if (wrongGuess > 9) {
        console.log("YOU LOSE!");
        // var audio = new Audio('#');
        // audio.play();
        losses++;
        console.log(losses);
        reset();
    } 


  
function reset() {
    lettersUsed = [];
    wordBlanks = [];
    guessRem = 0;
    wrongGuess = 0;
    guessIndex = 0;
    keyIndex = 0;
    wordChoice = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log("game reset -- new word = " + wordChoice);
    $("#game").html("<div id='row'><h3 id='wins'>Wins: " + wins + "</h3</div><div id='row'><h3 id='losses'>Losses: " + losses + "</h3></div><div><h3 id='letGuess'>Letters guessed: " + lettersUsed +  "</h3></div><div id='row'><h3 id='guessRem'>Guesses remaining: " + guessRem + "</h3></div><div id='row'><h3 id='wrongGuess'>Wrong guesses: " + wrongGuess + "</h3></div>");

        

   



}
}
