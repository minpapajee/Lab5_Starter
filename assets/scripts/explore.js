// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }

  const text = document.getElementById("text-to-speak");
  const speakButton = document.querySelector('button');
  const synth = window.speechSynthesis;
  let speechOpt;

  document.getElementById("voice-select").addEventListener('change', (event) => {
    speechOpt = event.target.getAttribute('data-name');
  });

  speakButton.addEventListener('click', (event) => {
  
    const utterThis = new SpeechSynthesisUtterance(text.value);
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === speechOpt) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
  });
}

