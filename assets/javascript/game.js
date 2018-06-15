// game is nowhere near finished, but I will finish and resubmit as soon as it is. 
// I wanted to push what I have so far for the deadline. 
// At the time of this push, I am still working on the limit or verification that all 
// letters in wordChoice have been selected - and that gives a win - HTML to print to 
// the page - how to reset and restart the game - and other bells and whistles for
// the page that I wanted to have styled. - Vale Rideout


        
// declared variables:

var wordlist = ["stalwart", "brazen", "handiwork", "sacrosanct", "standard", "reciprocity", "reprobate", "asphyxiate", "tribunal", "adrenalin"];
var wins = 0;
var losses = 0;
var lettersUsed = [];
var wordBlanks = [];
var guessRem = 0;
var guessIndex = 0;
var wordChoice = wordlist [Math.floor(Math.random() * wordlist.length)];
    console.log ("wordlist length is " + wordlist.length);
    console.log (wordChoice);


 // this is to 'push' blanks into the array wordBlanks - to later be replaced by 
// the event.key

    for (i = 0; i < wordChoice.length; i++) {
        wordBlanks.push(" _ ");
    }
    console.log (wordBlanks)

// setting keystart to begin game:

document.onkeypress = function(event) {
    
        console.log (event.key);

   lettersUsed.push(event.key);
        console.log (lettersUsed);

    guessIndex = wordChoice.indexOf(event.key);
    console.log (guessIndex);



    while (guessIndex != -1) {
        // wordBlanks.push(guessIndex);

    // This will splice INTO wordBlanks the event.key in its
    // index place - replacing the dashes

        wordBlanks.splice(guessIndex, 1, (event.key));
        guessIndex = wordChoice.indexOf(event.key, guessIndex +1);
    }
    console.log(wordBlanks);




    if (guessIndex == -1) {
        console.log("scream!");
        var audio = new Audio('assets/audio/wscream.mp3');
            audio.play();
    }
    else {
        console.log("ahhhhh");
    }



    // var n = str.indexOf("welcome");


     if (lettersUsed.length >= 9) {
         console.log("Game over!");
        alert ("Game Over!");
     }
    
}














// <!-- need to finish HTML below -->
// var html =
//      "<p><h2></h2></p>" +
//     "<p><h2>wins: " + wins + "</h2></p>" +
//     "<p><h2>losses: " + guess + "</h2></p>" +
//     "<p><h2>letters guessed: " + guess[] + "</p>" +
//     "<p><h2>Guesses remaining: " + guessRem + "</p>" +



// // Set the inner HTML contents of the #game div to our html string
// document.querySelector("#game").innerHTML = html;


//     i++
// }
// while (i < 10);

// return;
// }

// }

