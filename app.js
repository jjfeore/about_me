'use strict';

var correctAnswers = 0;

var fiveQuestions = [];
fiveQuestions.length = 20;
fiveQuestions[0] = 'We\'re going to play a guessing game about me. First question: Do I seem like the kind of guy who attended boarding school? ';
fiveQuestions[1] = 'You\'re right. Oddly enough, I went to a state-run, public boarding school called the Alabama School of Math and Science. ';
fiveQuestions[2] = 'Weirdly enough, I did go to boarding school. I went to a state-run, public boarding school called the Alabama School of Math and Science. ';
fiveQuestions[4] = 'Second question: Did I end up getting any kind of math or science degree in college? ';
fiveQuestions[5] = 'You\'re right. Even though I attended a math and science high school, I ended up getting a Political Science degree. ';
fiveQuestions[6] = 'Nope. You\'d think that after attending a math and science school I\'d get a STEM degree, but I got a BA in Political Science instead. ';
fiveQuestions[8] = 'Third question: Did I serve in a combat role in the Army? ';
fiveQuestions[9] = 'Sure did. As an Engineer Officer, I lead a Sapper platoon which ended up seeing the most active combat of any platoon in our battalion during it\'s deployment to Afghanistan. ';
fiveQuestions[10] = 'Strangely enough for a Political Science guy. I ended up leading a group of combat engineers in pretty active fighting in Afghanistan. ';
fiveQuestions[12] = 'Fourth question: Did I enjoy my last job? ';
fiveQuestions[13] = 'You guessed right. I hated it. That\'s part of the reason I\'m here at Code Fellows. ';
fiveQuestions[14] = 'No way! Would I be learning to code now if I liked operations that much? ';
fiveQuestions[16] = 'Fifth question: Am I enjoying Code Fellows so far? ';
fiveQuestions[17] = 'You bet! ';
fiveQuestions[18] = 'Of course, I am! Don\'t be so cynical! ';

var outOf = '/7 Answers Correct';

var userName = prompt('First off, please tell me your name.');

// console.log(fiveQuestions.length); Debugging code

function fiveQuest() {
  for (var i = 0; i < fiveQuestions.length; i += 4) {
    var a = i + 3;
    while (i === 0 || i === 8 || i === 16) {
      fiveQuestions[a] = prompt(fiveQuestions[i]);
      if (fiveQuestions[a].toLowerCase() === 'yes' || fiveQuestions[a].toLowerCase() === 'y') {
        correctAnswers++;
        alert(fiveQuestions[i + 1] + correctAnswers + outOf);
        console.log(fiveQuestions[i] + ': ' + fiveQuestions[a]);
        console.log(correctAnswers + outOf);
        break;
      }
      else if (fiveQuestions[a].toLowerCase() === 'no' || fiveQuestions[a].toLowerCase() === 'n') {
        alert(fiveQuestions[i + 2] + correctAnswers + outOf);
        console.log(fiveQuestions[i] + ': ' + fiveQuestions[a]);
        console.log(correctAnswers + outOf);
        break;
      }
      else {
        alert('Please enter a valid answer. Valid answers are in the form of: Yes, No, Y, or N.');
        console.log('Received invalid answer. Requesting a new answer.');
      }
    }

    while (i === 4 || i === 12) {
      fiveQuestions[a] = prompt(fiveQuestions[i]);
      if (fiveQuestions[a].toLowerCase() === 'yes' || fiveQuestions[a].toLowerCase() === 'y') {
        alert(fiveQuestions[i + 2] + correctAnswers + outOf);
        console.log(fiveQuestions[i] + ': ' + fiveQuestions[a]);
        console.log(correctAnswers + outOf);
        break;
      }
      else if (fiveQuestions[a].toLowerCase() === 'no' || fiveQuestions[a].toLowerCase() === 'n') {
        correctAnswers++;
        alert(fiveQuestions[i + 1] + correctAnswers + outOf);
        console.log(fiveQuestions[i] + ': ' + fiveQuestions[a]);
        console.log(correctAnswers + outOf);
        break;
      }
      else {
        alert('Please enter a valid answer. Valid answers are in the form of: Yes, No, Y, or N.');
        console.log('Received invalid answer. Requesting a new answer.');
      }
    }
  }
}
fiveQuest();

var ranNum = Math.floor(Math.random() * (10)) + 1;
console.log('Assigned random number of ' + ranNum);
alert('Okay, ' + userName + ', now we\'re going to play a guessing game! You\'ll have 4 tries to guess a random number between 1 and 10. I\'ll tell you if you\'re too high or too low.');
function randomQuest() {
  for (var b = 3; b >= 0; --b) {
    var numGuess = prompt('What\'s your guess?');
    if (!isNaN(numGuess) && numGuess == ranNum) {
      correctAnswers++;
      alert('You got it! ' + correctAnswers + outOf);
      console.log('Guessed ' + ranNum + ' correctly. ' + correctAnswers + outOf);
      break;
    }
    else if (b === 0 && !isNaN(numGuess) && numGuess != ranNum) {
      alert('Sorry. That was your last guess. The number was actually ' + ranNum + '. ' + correctAnswers + outOf);
      console.log('Did not get the right answer in 4 tries. ' + correctAnswers + outOf);
    }
    else if (!isNaN(numGuess) && numGuess > ranNum) {
      alert('Too high ' + b + '/4 tries remaining');
      console.log('Too high ' + b + '/4 tries remaining');
    }
    else if (!isNaN(numGuess) && numGuess < ranNum) {
      alert('Too low ' + b + '/4 tries remaining');
      console.log('Too low ' + b + '/4 tries remaining');
    }
    else {
      var c = b + 1;
      alert('Invalid answer: please enter a number. Still ' + c + '/4 tries remaining');
      console.log('Received invalid answer. Requesting a new answer.');
      b++;
    }
  }
}
randomQuest();

var topPlaces = ['Croatia', 'Peru', 'Antarctica', 'Brazil', 'Italy', 'Ethiopia', 'Germany', 'Nepal', 'Turkey', 'Ethiopia'];
function placeQuest(){
  alert (userName + ', I hope you remember my list of places I want to visit. You\'ll have 6 guesses to name one of the places.');
  for (var b = 5; b >= 0; --b) {
    var placeGuess = prompt('What\'s your guess?');
    placeGuess = placeGuess[0].toUpperCase() + placeGuess.slice(1,placeGuess.length).toLowerCase();
    console.log('Guess is ' + placeGuess);
    if (topPlaces.includes(placeGuess)) {
      correctAnswers++;
      alert('Wow! You got it. You could have guessed any of the following: ' + topPlaces + ' ' + correctAnswers + outOf);
      console.log('Correct! ' + correctAnswers + outOf);
      break;
    }
    else if (b === 0) {
      alert('Sorry, but that was your last guess. You could have guessed any of the following: ' + topPlaces + ' ' + correctAnswers + outOf);
      console.log('Out of guesses! ' + correctAnswers + outOf);
      break;
    }
    else {
      alert('Incorrect answer. Only ' + b + '/6 tries remaining');
      console.log('Incorrect Answer');
    }
  }
}
placeQuest();

function correctNum(){
  if (correctAnswers === 7) {
    alert('Awesome job, ' + userName + '! You got all the questions correct.');
  }
  else {
    alert('Bummer, ' + userName + '. You only got ' + correctAnswers + outOf + '. Better luck next time.');
  }
}
correctNum();

document.getElementById('field1').innerHTML = fiveQuestions[3];
document.getElementById('field2').innerHTML = fiveQuestions[7];
document.getElementById('field3').innerHTML = fiveQuestions[11];
document.getElementById('field4').innerHTML = fiveQuestions[15];
document.getElementById('field5').innerHTML = fiveQuestions[19];
document.getElementById('field6').innerHTML = topPlaces;
document.getElementById('field7').innerHTML = ranNum;
document.getElementById('field8').innerHTML = correctAnswers;
