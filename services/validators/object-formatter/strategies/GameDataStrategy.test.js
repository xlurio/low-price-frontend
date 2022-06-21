import GameDataStrategy from './GameDataStrategy';

describe('GameDataStrategy class tests', () => {
  test('format method', () => {
    const dummyGame = {
      id: 3592,
      game: {
        id: 1301,
        name: 'Waveform',
        score: 81,
      },
      store: {
        id: 6,
        name: 'Steam',
        link: 'https://store.steampowered.com/',
      },
      price: '1.95',
    };

    const { id } = dummyGame;
    const { game } = dummyGame;
    const { name: title } = game;
    const { score } = game;
    const { price: bestPrice } = dummyGame;

    const expectedObject = { id, title, score, bestPrice };

    const strategy = new GameDataStrategy();

    const result = strategy.format(dummyGame);

    expect(result).toStrictEqual(expectedObject);
  });

  test('isValid method with a valid object', () => {
    const dummyGame = {
      id: 3592,
      game: {
        id: 1301,
        name: 'Waveform',
        score: 81,
      },
      store: {
        id: 6,
        name: 'Steam',
        link: 'https://store.steampowered.com/',
      },
      price: '1.95',
    };
    const strategy = new GameDataStrategy();
    const result = strategy.isValid(dummyGame);
    expect(result).toBeTruthy();
  });

  test('isValid method with an invalid object', () => {
    const dummyGame = {
      random: 'data',
      what: 'ever',
    };
    const strategy = new GameDataStrategy();
    const result = strategy.isValid(dummyGame);
    expect(result).not.toBeTruthy();
  });
});
