const buttonColours = ["red", "blue", "green", "yellow"]
const sounds = {
  red: new Audio('sounds/red.mp3'),
  blue: new Audio('sounds/blue.mp3'),
  green: new Audio('sounds/green.mp3'),
  yellow: new Audio('sounds/yellow.mp3'),
  wrong: new Audio('sounds/wrong.mp3')
}
let startedGame = false
let level = 0
let gamePattern = []
let userClickedPattern = []
function nextSequence() {
  let randomNumber = Math.round(Math.random() * 3)
  let randomChosenColour = buttonColours[randomNumber]
  playAnimation(randomChosenColour)
  gamePattern.push(randomChosenColour)
  level++
  $('h1').text(`Level ${level}`)
}

function playAnimation(color) {
  let audio = sounds[color]
  audio?.play()
  $(`.${color}`).addClass('pressed').delay(100).queue(function (next) {
    $(this).removeClass('pressed')
    next()
  })
  $(`.${color}`).fadeOut(100).fadeIn(100)
}

$('.btn').on('click', (event) => {
  let userColor = event.target.id
  playAnimation(userColor)
  userClickedPattern.push(userColor)
  checkAnswer()
})



$(document).on('keydown', () => {
  if (!startedGame) {
    startedGame = true
    $('h1').text(`Level ${level}`)
    nextSequence()
  }
})

function checkAnswer() {
  currentMove = userClickedPattern.length - 1
  if (userClickedPattern[currentMove] !== gamePattern[currentMove]) {
    let audio = sounds['wrong']
    audio.play()
    $('h1').text('Game Over, Press Any Key to Restar')
    $('body').addClass('game-over').delay(100).queue(function (next) {
      $(this).removeClass('game-over')
      next()
    })
    startOver()
    return;
  }
  if (userClickedPattern.length === gamePattern.length) {
    userClickedPattern.length = 0
    setTimeout(() => nextSequence(), 1000)
  }
}

function startOver() {
  startedGame = false
  level = 0
  userClickedPattern = []
  gamePattern = []
}

