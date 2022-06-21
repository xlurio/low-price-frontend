import USAToEuropeanStrategy from './USAToEuropeanStrategy';

describe('USAToEuropeanStrategy class tests', () => {
  test('the format method', () => {
    const strategy = new USAToEuropeanStrategy();
    const realOutput = strategy.format(' 38.90');
    expect(realOutput).toBe('38,90');
  });

  test('the isValid method with a valid parameter', () => {
    const strategy = new USAToEuropeanStrategy();
    const realOutput = strategy.isValid(' 38.90');
    expect(realOutput).toBe(true);
  });

  test('the isValid method with a valid parameter', () => {
    const strategy = new USAToEuropeanStrategy();
    const realOutput = strategy.isValid('abc1');
    expect(realOutput).toBe(false);
  });
});
