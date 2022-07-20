'use strict';

import Questionnaire from './classes/questionnaire.class.js';

const questionnaire = new Questionnaire(
  'What is your favourite programming language?',
  ['JavaScript', 'Python', 'Rust', 'C++'],
);

const message = `${questionnaire.question}\n${questionnaire.options.join('\n')}`;
const poll_btn = document.querySelector('.poll');

poll_btn.addEventListener('click', () => questionnaire.askAQuestion(message));
