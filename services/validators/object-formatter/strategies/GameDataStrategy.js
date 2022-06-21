import ObjectFormattingStrategy from './ObjectFormattingStrategy';

class GameDataStrategy extends ObjectFormattingStrategy {
  format(unformattedObject) {
    return this.#extractPropertiesFromObject(unformattedObject);
  }

  #extractPropertiesFromObject(object) {
    const { id } = object;
    const { game } = object;
    const { name: title } = game;
    const { score } = game;
    const { price: bestPrice } = object;

    return { id, title, score, bestPrice };
  }

  isValid(toValidateObject) {
    try {
      return this.#validateObjectProperties(toValidateObject);
    } catch (error) {
      return false;
    }
  }

  #validateObjectProperties(toValidateObject) {
    const { id, title, bestPrice } =
      this.#extractPropertiesFromObject(toValidateObject);
    return ![id === null, title === null, bestPrice === null].includes(true);
  }
}

export default GameDataStrategy;
