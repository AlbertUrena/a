
var numberOfKeys = document.querySelectorAll(".tecla").length;

for (var i = 0; i < numberOfKeys; i++) {

  var theKey = document.querySelectorAll(".tecla")[i];

  document.querySelectorAll(".tecla")[i].addEventListener("click", function(evt) {

    console.log(theKey.innerHTML);

  })

  document.addEventListener("keydown", function(event){

    animation(event.key);

    makeSound(event.key);


  })
}

function makeSound(key) {

  switch (key) {

    case "a":
      var p1 = new Audio ("sounds/p1.mp3");
      p1.play();
      break;

    case "w":
      var p2 = new Audio ("sounds/p2.mp3");
      p2.play();
      break;

    case "s":
      var p3 = new Audio ("sounds/p3.mp3");
      p3.play();
      break;

    case "d":
      var p4 = new Audio ("sounds/p4.mp3");
      p4.play();
      break;

    case "r":
      var p5 = new Audio ("sounds/p5.mp3");
      p5.play();
      break;

    case "f":
      var p6 = new Audio ("sounds/p6.mp3");
      p6.play();
      break;

    case "g":
      var p7 = new Audio ("sounds/p7.mp3");
      p7.play();
      break;

    case "y":
      var p8 = new Audio ("sounds/p8.mp3");
      p8.play();
      break;

    case "h":
      var p9 = new Audio ("sounds/p9.mp3");
      p9.play();
      break;

    case "j":
      var p10 = new Audio ("sounds/p10.mp3");
      p10.play();
      break;

    case "i":
      var p11 = new Audio ("sounds/p11.mp3");
      p11.play();
      break;

    case "k":
      var p12 = new Audio ("sounds/p12.mp3");
      p12.play();
      break;

    case "l":
      var p13 = new Audio ("sounds/p13.mp3");
      p13.play();
      break;

    case "p":
      var p14 = new Audio ("sounds/p14.mp3");
      p14.play();
      break;

    default: console.log("pressed")

  }
}

function animation(whichKey){

  var actualKey = document.querySelector("." + whichKey);

  actualKey.classList.add("pressed");

  setTimeout(function(){
    actualKey.classList.remove("pressed")
  }, 100);
}
