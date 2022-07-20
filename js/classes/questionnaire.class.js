'use strict';

import PrintMessages from './print-messages.class.js';
import Validators from './validator.class.js';
import Utilities from './utilities.class.js';

export default class Questionnaire extends PrintMessages {
  #question = '';
  #options = '';
  #results = [];

  constructor(question, options) {
    super();
    this.#question = question;
    this.#options = options;
    this.#results = options.map((option) => ({ option, value: 0 }));
    console.log(this.#results);
  }

  /* Get read only question */
  get question() {
    return this.#question;
  }

  /* Get read only options */
  get options() {
    return this.#options;
  }

  /* Method to ask user a question */
  askAQuestion(message) {
    const user_choice = this.#checkAnswer(this.promptUser(message));
    if (Validators.checkIsUndefinedOrNull(user_choice)) {
      return;
    }
    const curr = this.#results[user_choice];
    this.#results[user_choice] = { ...curr, value: curr.value + 1 };
    this.alertUser(JSON.stringify(this.#results.map((o) => o.value)));
  }

  /* Validate user answer whether is number and is it in right range */
  #checkAnswer(answer) {
    const conv_answer = Utilities.convertToNum(answer);
    if (Validators.checkIsNumber(conv_answer)) {
      this.alertUser(`Your choice is not a number. \n TRY AGAIN!`);
      return;
    }
    if (Validators.isInRange(conv_answer)) {
      this.alertUser(`Your choice must be between 0 and 3. \n TRY AGAIN!`);
      return;
    }
    return answer;
  }
}
