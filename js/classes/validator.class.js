'use strict';

export default class Validators {
  constructor() {
  }

  /* Check is value a not a number */
  static checkIsNumber(value) {
    return isNaN(value);
  }

  /* Check is number in right range */
  static isInRange(num) {
    return num < 1 || num > 4;
  }

  /* Check if value after conversation to undefined or null */
  static checkIsUndefinedOrNull(val) {
    return ['undefined', 'null'].includes(String(val));
  }
}
