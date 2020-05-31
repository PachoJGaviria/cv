function setImage(imgElement, diceValue) {
  imgElement.setAttribute('src', `images/dice${diceValue}.png`);
  imgElement.setAttribute('alt', `dice ${diceValue}`);
}
function randomDice() {
  return Math.round(Math.random() * 5) + 1
}

let valuePlayer1 = randomDice()
let imgPlayer1 = document.querySelector('.player1 img')
setImage(imgPlayer1, valuePlayer1)

let valuePlayer2 = randomDice()
let imgPlayer2 = document.querySelector('.player2 img')
setImage(imgPlayer2, valuePlayer2)

let title = document.querySelector('h1')
if (valuePlayer1 > valuePlayer2) {
  title.innerHTML = '🚩<em> Player 1 wins!</em>'
} else if (valuePlayer1 < valuePlayer2){
  title.innerHTML = '<em>Player 2 wins!</em> 🚩'
} else {
  title.innerHTML = '<em>Draw!</em>'
}