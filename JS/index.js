// ****changing image for player 1****
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
document.getElementById("img1").src = "images/" + randomDiceImage1;

// ****changing image for player 2****
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
document.getElementById("img2").src = "images/" + randomDiceImage2;

// calculating who is the winner
if (randomNumber1 > randomNumber2){
  document.getElementById("heading").textContent = "🏆 Winner: Player 1";
}
else if (randomNumber1 < randomNumber2){
  document.getElementById("heading").textContent = " Winner: Player 2 🏆";
}
else if (randomNumber1 === randomNumber2){
  document.getElementById("heading").textContent = "Draw!";
}
