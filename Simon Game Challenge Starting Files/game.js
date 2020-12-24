var buttonColours = ["red", "blue", "green", "yellow"],
    gamePattern = [],
    userClickedPattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4); 
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

$(document).ready(function(){
    var userChosenColour;
    nextSequence();
    var linkAudio = 'sounds/red.mp3';
    var audioSequence = new Audio('sounds/red.mp3');
    audioSequence.play();

    audioSequence.oncanplaythrough = (event) => {
        var playedPromise = audioSequence.play();
        if (playedPromise) {
            playedPromise.catch((e) => {
                 console.log(e)
                 if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') { 
                       console.log(e.name);
                  }
             }).then(() => {
                  console.log("playing sound !!!");
             });
         }
    }

    $('#red').click(function(){
        var audio = new Audio('sounds/red.mp3');
        audio.play();

        userChosenColour = "red";
        userClickedPattern.push(userChosenColour);
    });

    $('#blue').click(function(){
        var audio = new Audio('sounds/blue.mp3');
        audio.play();

        userChosenColour = "blue";
        userClickedPattern.push(userChosenColour);
    });

    $('#green').click(function(){
        var audio = new Audio('sounds/green.mp3');
        audio.play();

        userChosenColour = "green";
        userClickedPattern.push(userChosenColour);
    });

    $('#yellow').click(function(){
        var audio = new Audio('sounds/yellow.mp3');
        audio.play();

        userChosenColour = "yellow";
        userClickedPattern.push(userChosenColour);
    });
});

