import NumberFormattingStrategy from './NumberFormattingStrategy';

class USAToEuropeanStrategy extends NumberFormattingStrategy {
  format(number) {
    number = this.#parseToString(number);
    const hasDot = number.includes('.');
    const hasComma = number.includes(',');

    if (hasDot && hasComma) {
      number = number.replace(',', '');
    }
    return number.replace('.', ',');
  }

  #parseToString(number) {
    number = String(number);
    return number.trim();
  }

  isValid(number) {
    const isNull = number == null;
    const hasOnlyValidCharacters = this.#hasOnlyValidCharacters(number);
    if (!isNull && hasOnlyValidCharacters) {
      return true;
    }
    return false;
  }

  #hasOnlyValidCharacters(number) {
    number = this.#parseToString(number);
    const numberCharacters = number.split('');
    const isAllValid = numberCharacters.map(this.#isCharacterValid);
    return !isAllValid.includes(false);
  }

  #isCharacterValid(character) {
    const validCharacters = '0123456789,.';
    return validCharacters.includes(character);
  }
}

export default USAToEuropeanStrategy;
