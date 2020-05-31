const sounds = {
  'w': new Audio('sounds/crash.mp3'),
  'a': new Audio('sounds/snare.mp3'),
  's': new Audio('sounds/kick-bass.mp3'),
  'd': new Audio('sounds/tom-1.mp3'),
  'j': new Audio('sounds/tom-2.mp3'),
  'k': new Audio('sounds/tom-3.mp3'),
  'l': new Audio('sounds/tom-4.mp3')
}

let wButtons = document.getElementsByClassName('drum')
for (const element of wButtons) {
  element.addEventListener('click', (event) => {
    let audio = sounds[event.toElement.innerText] || new Audio('sounds/tom-1.mp3')
    audio.play()
    buttonAnimation(event.toElement.innerText)
  })
}

document.addEventListener('keydown', (event) => {
  let audio = sounds[event.key]
  audio?.play()
  buttonAnimation(event.key)
})

function buttonAnimation(keyButton) {
  let button = document.querySelector(`.${keyButton}`);
  button.classList.add('pressed')
  setTimeout(() => {
    button.classList.remove('pressed')
  }, 200);
}