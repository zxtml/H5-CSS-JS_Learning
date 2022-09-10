'use strict';
let Guess_Number = 1;
let Score = 0;
let Score_This_Part = 20;
let High_Score = 0;
console.log(document.querySelector('.message').textContent);
// What's the DOM
/*
    It's called Document Object Model
    it is a tree structure,for using in HTML
    It's really a complete repretentation of the HTML Document
*/
// DOM != JavaScript
/*        PAY ATTENTION
    the DOM is a part of the 
            Web APIs
*/
document.querySelector('.again').addEventListener('click', function () {
  Score = 0;
  Score_This_Part = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 0;
  document.querySelector('.guess').value = '';
});

Guess_Number = Math.trunc(Math.random() * 20) + 1;
console.log(Guess_Number);

document.querySelector('.check').addEventListener('click', function () {
  const Guess_This_Part = Number(document.querySelector('.guess').value);
  if (Guess_This_Part === Guess_Number) {
    Score = Score + Score_This_Part;
    document.querySelector('.message').textContent = '🎉 Congretulations!!';
    Guess_Number = Math.trunc(Math.random() * 20) + 1;
    console.log(Guess_Number);
    Score_This_Part = 20;
    if (Score >= 100) alert('the Flag is:');
  } else if (
    !Guess_This_Part ||
    Guess_This_Part < 1 ||
    Guess_This_Part > 20 ||
    isNaN(Guess_This_Part)
  )
    document.querySelector('.message').textContent = '🤺🤺🤺\n Forbiden Input!';
  else if (Guess_This_Part !== Guess_Number) {
    Score_This_Part -= 5;
    if (Score_This_Part <= -100) alert('OH,how can you dare!\nThe flag is:');
    if (Guess_This_Part < Guess_Number)
      document.querySelector('.message').textContent =
        'Too LOW!Too LOW!!(Lang Lang.jpg)';
    else document.querySelector('.message').textContent = 'too HIGH!!';

    if (Score_This_Part <= 0) {
      document.querySelector('.message').textContent = 'You Are IN DARK!!!🌚';
      document.querySelector('.score').value = Score;

      if (High_Score < Score) {
        document.querySelector('.highscore').value = Score;
        High_Score = Score;
        document.querySelector('.highscore').textContent = High_Score;
      }
      if (Score_This_Part < -70) alert("You are the satan's son!");
      else if (Score_This_Part < -30)
        alert("OH! Holny Shit!Don't press again!");
      else if (Score_This_Part < -10)
        alert("No No No,you can't do this again!");
      else if (Score < 100) alert('Bad Ending!');
    }
  }
  console.log(document.querySelector('.message').textContent);
  document.querySelector('.score').textContent = Score;
});
