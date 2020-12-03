let dice, activePlayer, scores, roundScore, gamePlaying;

init();

document.querySelector(".btn-rolll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. ACCESS THE RANDOM NO
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. displaying the dice
    var diceDOM = document.querySelector("#dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".svg";

    // update the round score if rolled no. is not 1
    if (dice !== 1) {
      roundScore += dice;
      document.getElementById("current-" + activePlayer).innerHTML = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-holdd").addEventListener("click", function () {
  if (gamePlaying) {
    //add current score to global score
    var diceDOM = document.querySelector("#dice");
    diceDOM.style.display = "none";
    scores[activePlayer] += roundScore;

    //display UI
    document.getElementById("score-" + activePlayer).innerHTML =
      scores[activePlayer];
    //check if the player is won
    if (scores[activePlayer] >= 30) {
      document.querySelector("#name-" + activePlayer).innerHTML =
        "<i>WINNER</i>";
      document.querySelector("#dice").style.display = "none";
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // changing the active player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  // initializing  by 0 before each new player comes
  document.getElementById("current-0").innerHTML = "0";
  document.getElementById("current-1").innerHTML = "0";

  // to toggle the active
  document.getElementById("name-0").classList.toggle("active");
  document.getElementById("name-1").classList.toggle("active");
}

document.querySelector(".btn-neww").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector("#dice").style.display = "none";
  document.getElementById("score-0").innerHTML = "0";
  document.getElementById("score-1").innerHTML = "0";
  document.getElementById("current-0").innerHTML = "0";
  document.getElementById("current-1").innerHTML = "0";
  document.getElementById("name-0").innerHTML = "Player 1";
  document.getElementById("name-1").innerHTML = "Player 2";
  document.getElementById("name-0").classList.add("active");
  document.getElementById("name-1").classList.remove("active");
}
