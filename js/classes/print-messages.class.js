'use strict';

export default class PrintMessages {
  constructor() {
  }

  /* Print messages by console */
  consoleResults(message) {
    console.log(message);
  }

  /* Print messages by windows alert */
  alertUser(message) {
    window.alert(message);
  }

  /* Print messages by prompt method and return answer */
  promptUser(message) {
    return window.prompt(message);
  }
}
