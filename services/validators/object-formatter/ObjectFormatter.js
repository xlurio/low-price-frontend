class ObjectFormatter {
  constructor(strategy) {
    this._strategy = strategy;
  }

  format(objectToFormat) {
    const isObjectValid = this._strategy.isValid(objectToFormat);
    if (isObjectValid) {
      return this._strategy.format(objectToFormat);
    }
    throw new TypeError(objectToFormat + ' is not a valid entry');
  }
}

export default ObjectFormatter;
