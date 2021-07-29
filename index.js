var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      console.log(key);
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      console.log(key);
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      console.log(key);
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      console.log(key);
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      console.log(key);
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      console.log(key);
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      console.log(key);
      break;

    case "q":
      var ominous = new Audio('sounds/ominous-drums.wav');
      ominous.play();
      console.log(key);
      break;

    case "e":
      var prelude = new Audio('sounds/atmospheric-prelude.wav');
      prelude.play();
      console.log(key);
      break;

    case "r":
      var slide = new Audio('sounds/China-Cymbal-Slide.mp3');
      slide.play();
      console.log(key);
      break;

    case "t":
      var cool = new Audio('sounds/cool-impact.wav');
      cool.play();
      console.log(key);
      break;

    case "y":
      var cymbal_hit = new Audio('sounds/Crash-Cymbal-Hit.mp3');
      cymbal_hit.play();
      console.log(key);
      break;

    case "u":
      var dark = new Audio('sounds/deep-dark-horror-drum.wav');
      dark.play();
      console.log(key);
      break;

    case "i":
      var atmospheric = new Audio('sounds/Foot-Pedal.mp3');
      atmospheric.play();
      console.log(key);
      break;

    case "o":
      var stick = new Audio('sounds/Drum-Sticks-Hit.mp3');
      stick.play();
      console.log(key);
      break;

    case "p":
      var cartoon = new Audio('sounds/funny-cartoon-tones.wav');
      cartoon.play();
      console.log(key);
      break;

    case "f":
      var hit_hat = new Audio('sounds/Hi-Hat-Closed-Hit.mp3');
      hit_hat.play();
      console.log(key);
      break;

    case "g":
      var joke = new Audio('sounds/joke-drums.wav');
      joke.play();
      console.log(key);
      break;

    case "h":
      var tom_hit = new Audio('sounds/Medium-Tom-Drum-Hit.mp3');
      tom_hit.play();
      console.log(key);
      break;

    case "z":
    var pulsating = new Audio('sounds/pulsating-bass-transition.wav');
    pulsating.play();
    console.log(key);
    break;

    case "x":
    var ride = new Audio('sounds/Ride-Cymbal-Bell.mp3');
    ride.play();
    console.log(key);
    break;

    case "c":
    var wash = new Audio('sounds/Ride-Cymbal-Wash.mp3');
    wash.play();
    console.log(key);
    break;

    case "v":
    var snare_drum = new Audio('sounds/Snare-Drum.mp3');
    snare_drum.play();
    console.log(key);
    break;

    case "b":
    var splash = new Audio('sounds/Splash-Cymbal.mp3');
    splash.play();
    console.log(key);
    break;

    case "n":
    var bell = new Audio('sounds/toy-drums-and-bell-ding.wav');
    bell.play();
    console.log(key);
    break;

    case "m":
    var tribal = new Audio('sounds/tribal-dry-drum.wav');
    tribal.play();
    console.log(key);
    break;



    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
