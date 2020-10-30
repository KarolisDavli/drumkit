
function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.code}"]`);
  const drum = document.querySelector(`.drum[data-key="${e.code}"]`);
  if(!sound) return; 
  sound.currentTime = 0; //Rewind sound to beggining
  sound.play();
  drum.classList.add('pressed');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //Skip if not transform
  this.classList.remove('pressed')
}

const keys = document.querySelectorAll('.drum');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

// I learnt about custom html attributes

// Removing class from dom element with 'transitioned' event listiter 
//after elements transformation is complete