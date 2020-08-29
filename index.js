$(".start").click(function() {

  rollDice();
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(rollDice, 500);
  setTimeout(winnerDecision, 500);



});

function rollDice() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  $(".img1").attr("src", "images/dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  $(".img2").attr("src", "images/dice" + randomNumber2 + ".png");
}

function winnerDecision() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  $(".img1").attr("src", "images/dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  $(".img2").attr("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    $("h1").text("Player 1 wins.");
  } else if (randomNumber1 < randomNumber2) {
    $("h1").text("Player 2 wins.");
  } else if (randomNumber1 === randomNumber2) {
    $("h1").text("Draw.");

  }
}
