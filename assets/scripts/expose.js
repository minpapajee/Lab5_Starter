// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let confetti = false;

  // change image and audio based on drop down menu change
  const imageSelect = document.querySelector('[name="horn"]');
  imageSelect.addEventListener('change', (event) => {
    if (event.target.value == "air-horn") {
      document.querySelector("img").src="assets/images/air-horn.svg";
      document.querySelector("audio").src="assets/audio/air-horn.mp3";
      confetti = false;
    }
    else if (event.target.value == "car-horn") {
      document.querySelector("img").src="assets/images/car-horn.svg";
      document.querySelector("audio").src="assets/audio/car-horn.mp3";
      confetti = false;
    }
    else if (event.target.value == "party-horn") {
      document.querySelector("img").src="assets/images/party-horn.svg";
      document.querySelector("audio").src="assets/audio/party-horn.mp3";
      confetti = true;
    }
  });

  // volume slider
  const volumeSlider = document.getElementById("volume");
  volumeSlider.addEventListener('input', (event) => {
    let soundImg = document.querySelector('#volume-controls img');
    let audioTag = document.querySelector('.hidden');
    if (event.target.value == 0) {
      soundImg.src = "assets/icons/volume-level-0.svg";
      audioTag.volume = event.target.value/100;
    }
    else if (event.target.value > 0 && event.target.value < 33) {
      soundImg.src = "assets/icons/volume-level-1.svg";
      audioTag.volume = event.target.value/100;
    }
    else if (event.target.value > 33 && event.target.value < 67) {
      soundImg.src = "assets/icons/volume-level-2.svg";
      audioTag.volume = event.target.value/100;
    }
    else if (event.target.value > 67) {
      soundImg.src = "assets/icons/volume-level-3.svg";
      audioTag.volume = event.target.value/100;
    }
  });

  // play button
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', (event) => { 
    document.querySelector('.hidden').play();
    if (confetti) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({});
    }
  });
}