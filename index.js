var number = document.querySelectorAll(".drum")
var audio = new Audio('sounds/tom-2.mp3')
for (var i = 0; i < number.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", (e) => {
    console.log(e.target.innerHTML)
  });
}

// audio.play();