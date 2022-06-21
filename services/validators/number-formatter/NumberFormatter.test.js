import NumberFormatter from './NumberFormatter';
import USAToEuropeanStrategy from './strategies/USAToEuropeanStrategy.js';

describe('number formatter tests', () => {
  test('if the USAToEuropeanStrategy formats correctly', () => {
    const numberFormatter = new NumberFormatter();
    const usaToEuropean = new USAToEuropeanStrategy();
    numberFormatter.strategy = usaToEuropean;
    const expected = '2,5';
    const result = numberFormatter.format('2.5');
    expect(result).toBe(expected);
  });

  test('if the USAToEuropeanStrategy accepts only numeric values', () => {
    const numberFormatter = new NumberFormatter();
    const usaToEuropean = new USAToEuropeanStrategy();
    numberFormatter.strategy = usaToEuropean;
    const result = () => numberFormatter.format('2.5asdads');
    expect(result).toThrow(TypeError);
  });
});
