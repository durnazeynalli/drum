// let audio1 = new Audio("sounds/tom-1.mp3");
// let audio2 = new Audio("sounds/tom-2.mp3");
// let audio3 = new Audio("sounds/tom-3.mp3");
// let audio4 = new Audio("sounds/tom-4.mp3");
// let audio5 = new Audio("sounds/snare.mp3");
// let audio6 = new Audio("sounds/crash.mp3");
// let audio7 = new Audio("sounds/kick-bass.mp3");
//
// let audio = [
//   audio1,
//   audio2,
//   audio3,
//   audio4,
//   audio5,
//   audio6,
//   audio7
// ];


for (let i = 0; i < document.querySelectorAll('button').length; i++) {
  document.querySelectorAll('button')[i].addEventListener("click", function () {

    // audio[i].play();
    let btn = this.innerHTML;

    makeSound(btn);
    buttonAnimation(btn);

  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
      case "w":
        let audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;
      case "a":
        let audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
      case "s":
        let audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;
      case "d":
        let audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;
      case "j":
        let audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        break;
      case "k":
        let audio6 = new Audio("sounds/crash.mp3");
        audio6.play();
        break;
      case "l":
        let audio7 = new Audio("sounds/kick-bass.mp3");
        audio7.play();
        break;
    default: console.log(this);

  }
}

function buttonAnimation(currentBtn) {

  let activeBtn = document.querySelector("." + currentBtn);
  activeBtn.classList.add("pressed");

  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);

  console.log(activeBtn);

}
