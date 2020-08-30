
var x = Math.floor ( Math.random() * 6 ) + 1;

var diceImage1 = "images/dice" + x + ".png";

document.querySelector(".img1").setAttribute( "src" , diceImage1 );

var y = Math.floor ( Math.random() * 6 ) + 1;

var diceImage2 = "images/dice" + y + ".png";

document.querySelector(".img2").setAttribute( "src" , diceImage2 );

if ( x > y )
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else
{
  if ( x < y )
  {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
  else
  {
    document.querySelector("h1").innerHTML = "DRAW!";
  }
}
