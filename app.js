'use strict';

var correctAnswers = 0;

var fiveQuestions = [];
fiveQuestions.length = 20;
fiveQuestions[0] = 'We\'re going to play a guessing game about me. First question: Do I seem like the kind of guy who attended boarding school?';
fiveQuestions[1] = 'You\'re right. Oddly enough, I went to a state-run, public boarding school called the Alabama School of Math and Science. '
fiveQuestions[2] = 'Weirdly enough, I did go to boarding school. I went to a state-run, public boarding school called the Alabama School of Math and Science. '
fiveQuestions[4] = 'Second question: Did I end up getting any kind of math or science degree in college?'
fiveQuestions[5] = 'You\'re right. Even though I attended a math and science high school, I ended up getting a Political Science degree. '
fiveQuestions[6] = 'Nope. You\'d think that after attending a math and science school I\'d get a STEM degree, but I got a BA in Political Science instead. '
fiveQuestions[8] = 'Third question: Did I serve in a combat role in the Army?'
fiveQuestions[9] = 'Sure did. As an Engineer Officer, I lead a Sapper platoon which ended up seeing the most active combat of any platoon in our battalion during it\'s deployment to Afghanistan. '
fiveQuestions[10] = 'Strangely enough for a Political Science guy. I ended up leading a group of combat engineers in pretty active fighting in Afghanistan. '
fiveQuestions[12] = 'Fourth question: Did I enjoy my last job?'
fiveQuestions[13] = 'You guessed right. I hated it. That\'s part of the reason I\'m here at Code Fellows. '
fiveQuestions[14] = 'No way! Would I be learning to code now if I liked operations that much? '
fiveQuestions[16] = 'Fifth question: Am I enjoying Code Fellows so far?'
fiveQuestions[17] = 'You bet! '
fiveQuestions[18] = 'Of course, I am! Don\'t be so cynical! '

var outOf = '/7 Answers Correct';

for (i = 0; i < fiveQuestions.length; i += 4) {
  var a = i + 3;
  fiveQuestions[a] = prompt(fiveQuestions[i]);
  while (i === 0) {
    if (question[a].toLowerCase() === 'yes' || question[a].toLowerCase() === 'y') {
      correctAnswers++;
      alert(fiveQuestions[i+1] + correctAnswers + outOf);
      console.log(fiveQuestions[i] + ': ' + fiveQuestions[a]);
      console.log(correctAnswers + outOf);
      break;
    }
    else if (question[a].toLowerCase() === 'no' || question[a].toLowerCase() === 'n') {
      alert(fiveQuestions[i+2] + correctAnswers + outOf);
      console.log(fiveQuestions[i] + ': ' + fiveQuestions[a]);
      console.log(correctAnswers + outOf);
      break;
    }
    else {
      alert('Please enter a valid answer. Valid answers are in the form of: Yes, No, Y, or N.');
      console.log('Received invalid answer.');
    }
  }
}

while (validAnswer === false) {
  var answer1 = prompt('We\'re going to play a guessing game about me. First question: Do I seem like the kind of guy who attended boarding school?');
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

validAnswer = false;
while (validAnswer === false) {
  var answer2 = prompt('Second question: Did I end up getting any kind of math or science degree in college?');
  if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
    correctAnswers++;
    alert('You\'re right. Even though I attended a math and science high school, I ended up getting a Political Science degree. ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I got a STEM degree or not. Answered with: ' + answer2);
    validAnswer = true;
  }
  else if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
    alert('Nope. You\'d think that after attending a math and science school I\'d get a STEM degree, but I got a BA in Political Science instead. ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I got a STEM degree or not. Answered with: ' + answer2);
    validAnswer = true;
  }
  else {
    alert('Please enter a valid answer. Valid answers are in the form of: Yes, No, Y, or N.');
    console.log('Asked whether I got a STEM degree or not. Received invalid answer.');
    validAnswer = false;
  }
}

validAnswer = false;
while (validAnswer === false) {
  var answer3 = prompt('Third question: Did I serve in a combat role in the Army?');
  if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
    correctAnswers++;
    alert('Sure did. As an Engineer Officer, I lead a Sapper platoon which ended up seeing the most active combat of any platoon in our battalion during it\'s deployment to Afghanistan. ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I served in a combat role in the Army. Answered with: ' + answer3);
    validAnswer = true;
  }
  else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
    alert('Strangely enough for a Political Science guy. I ended up leading a group of combat engineers in pretty active fighting in Afghanistan. ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I served in a combat role in the Army. Answered with: ' + answer3);
    validAnswer = true;
  }
  else {
    alert('Please enter a valid answer. Valid answers are in the form of: Yes, No, Y, or N.');
    console.log('Asked whether I served in a combat role in the Army. Received invalid answer.');
    validAnswer = false;
  }
}

validAnswer = false;
while (validAnswer === false) {
  var answer4 = prompt('Fourth question: Did I enjoy my last job?');
  if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
    correctAnswers++;
    alert('You guessed right. I hated it. That\'s part of the reason I\'m here at Code Fellows. ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I enjoyed my last job. Answered with: ' + answer4);
    validAnswer = true;
  }
  else if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
    alert('No way! Would I be learning to code now if I liked operations that much? ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I enjoyed my last job. Answered with: ' + answer4);
    validAnswer = true;
  }
  else {
    alert('Please enter a valid answer. Valid answers are in the form of: Yes, No, Y, or N.');
    console.log('Asked whether I enjoyed my last job. Received invalid answer.');
    validAnswer = false;
  }
}

validAnswer = false;
while (validAnswer === false) {
  var answer5 = prompt('Fifth question: Am I enjoying Code Fellows so far?');
  if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
    correctAnswers++;
    alert('You bet! ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I am enjoying Code Fellows right now. Answered with: ' + answer5);
    validAnswer = true;
  }
  else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
    alert('Of course, I am! Don\'t be so cynical! ' + correctAnswers + '/5 Answers Correct');
    console.log('Asked whether I am enjoying Code Fellows right now. Answered with: ' + answer5);
    validAnswer = true;
  }
  else {
    alert('Please enter a valid answer. Valid answers are in the form of: Yes, No, Y, or N.');
    console.log('Asked whether I am enjoying Code Fellows right now. Received invalid answer.');
    validAnswer = false;
  }
}
