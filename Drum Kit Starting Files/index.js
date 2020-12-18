var numberOfDrumButtons =  document.querySelectorAll(".drum").length;
var listSound = ["sounds/kick-bass.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3"];

for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        var audio;
        switch (buttonInnerHTML) {
            case "w":
                audio = new Audio(listSound[0]);
                break;
            case "a":
                audio = new Audio(listSound[1]);
                break;
            case "s":
                audio = new Audio(listSound[2]);
                break;
            case "d":
                audio = new Audio(listSound[3]);
                break;
            case "j":
                audio = new Audio(listSound[4]);
                break;
            case "k":
                audio = new Audio(listSound[5]);
                break;
            case "l":
                audio = new Audio(listSound[6]);
                break;
            default:
                break;
        }

        audio.play();
    });
}



        // console.log(i);