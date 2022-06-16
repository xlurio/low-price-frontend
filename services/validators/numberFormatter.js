class NumberFormatter {
  constructor() {
    this._strategy = null;
  }

  set strategy(newStrategy) {
    this._strategy = newStrategy;
  }

  format(number) {
    const isAValidNumber = this._strategy.isValid(number);

    if (!isAValidNumber) {
      throw new TypeError(number + ' is not a valid entry');
    } else {
      return this._strategy.format(number);
    }
  }
}

export default NumberFormatter;
