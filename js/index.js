'use strict';

// import Questionnaire from './classes/questionnaire.class.js';

const questionnaire = {
  question: 'What is your favourite programming language?',
  options: {
    1: 'JavaScript',
    2: 'Python',
    3: 'Rust',
    4: 'C++',
  },
}

const highest = function () {
  const x = Object.keys(questionnaire.options).map(Number).fill(0);
  return x;
}

const results = highest();

console.log(results);

// const message = `${questionnaire.question}\n${questionnaire.options}`;
// const poll_btn = document.querySelector('.poll');

// poll_btn.addEventListener('click', () => questionnaire.askAQuestion(message));
