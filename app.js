'use strict';
var validAnswer = false;
var correctAnswers = 0;

var answer1 = prompt('We\'re going to play a guessing game about me. First question: Do I seem like the kind of guy who attended boarding school?');
validAnswer = false;
while (validAnswer = false) {
  if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
    correctAnswers++;
    alert('You\'re right. Oddly enough, I went to a state-run, public boarding school called the Alabama School of Math and Science. ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I went to boarding school. Answered with: ' + answer1);
    validAnswer = true;
  }
  else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
    alert('Weirdly enough, I did go to boarding school. I went to a state-run, public boarding school called the Alabama School of Math and Science. ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I went to boarding school. Answered with: ' + answer1);
    validAnswer = true;
  }
  else {
    alert('Please enter a valid answer. Valid answers are in the form of: Yes, No, Y, or N.');
    console.log('Asked whether I went to boarding school. Received invalid answer.');
    validAnswer = false;
  }
}
