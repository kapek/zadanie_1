'use strict';

import Questionnaire from './classes/questionnaire.class.js';

const questionnaire = new Questionnaire(
  'What is your favourite programming language?',
  ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  [...new Array(4).fill(0)]
);

const message = `${questionnaire.question}\n${questionnaire.options.join('\n')}`;
const poll_btn = document.querySelector('.poll');

poll_btn.addEventListener('click', () => questionnaire.askAQuestion(message));
