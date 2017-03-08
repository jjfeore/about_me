'use strict';

var correctAnswers = 0;

var fiveQuestions = [];
fiveQuestions.length = 20;
fiveQuestions[0] = 'We\'re going to play a guessing game about me. First question: Do I seem like the kind of guy who attended boarding school? ';
fiveQuestions[1] = 'You\'re right. Oddly enough, I went to a state-run, public boarding school called the Alabama School of Math and Science. '
fiveQuestions[2] = 'Weirdly enough, I did go to boarding school. I went to a state-run, public boarding school called the Alabama School of Math and Science. '
fiveQuestions[4] = 'Second question: Did I end up getting any kind of math or science degree in college? '
fiveQuestions[5] = 'You\'re right. Even though I attended a math and science high school, I ended up getting a Political Science degree. '
fiveQuestions[6] = 'Nope. You\'d think that after attending a math and science school I\'d get a STEM degree, but I got a BA in Political Science instead. '
fiveQuestions[8] = 'Third question: Did I serve in a combat role in the Army? '
fiveQuestions[9] = 'Sure did. As an Engineer Officer, I lead a Sapper platoon which ended up seeing the most active combat of any platoon in our battalion during it\'s deployment to Afghanistan. '
fiveQuestions[10] = 'Strangely enough for a Political Science guy. I ended up leading a group of combat engineers in pretty active fighting in Afghanistan. '
fiveQuestions[12] = 'Fourth question: Did I enjoy my last job? '
fiveQuestions[13] = 'You guessed right. I hated it. That\'s part of the reason I\'m here at Code Fellows. '
fiveQuestions[14] = 'No way! Would I be learning to code now if I liked operations that much? '
fiveQuestions[16] = 'Fifth question: Am I enjoying Code Fellows so far? '
fiveQuestions[17] = 'You bet! '
fiveQuestions[18] = 'Of course, I am! Don\'t be so cynical! '

var outOf = '/7 Answers Correct';

// console.log(fiveQuestions.length); Debugging code

for (var i = 0; i < fiveQuestions.length; i += 4) {
  var a = i + 3;
  while (i === 0 || i === 8 || i === 16) {
    fiveQuestions[a] = prompt(fiveQuestions[i]);
    if (fiveQuestions[a].toLowerCase() === 'yes' || fiveQuestions[a].toLowerCase() === 'y') {
      correctAnswers++;
      alert(fiveQuestions[i+1] + correctAnswers + outOf);
      console.log(fiveQuestions[i] + ': ' + fiveQuestions[a]);
      console.log(correctAnswers + outOf);
      break;
    }
    else if (fiveQuestions[a].toLowerCase() === 'no' || fiveQuestions[a].toLowerCase() === 'n') {
      alert(fiveQuestions[i+2] + correctAnswers + outOf);
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
      alert(fiveQuestions[i+2] + correctAnswers + outOf);
      console.log(fiveQuestions[i] + ': ' + fiveQuestions[a]);
      console.log(correctAnswers + outOf);
      break;
    }
    else if (fiveQuestions[a].toLowerCase() === 'no' || fiveQuestions[a].toLowerCase() === 'n') {
      correctAnswers++;
      alert(fiveQuestions[i+i] + correctAnswers + outOf);
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
