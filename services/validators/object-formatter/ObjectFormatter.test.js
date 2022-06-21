import ObjectFormatter from './ObjectFormatter';
import GameDataStrategy from './strategies/GameDataStrategy';

describe('ObjectFormatter class tests', () => {
  test('format method with a valid input with the GameDataStrategy', () => {
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
    const formatter = new ObjectFormatter(strategy);
    const result = formatter.format(dummyGame);

    expect(result).toStrictEqual(expectedObject);
  });

  test('format method with a valid input with the GameDataStrategy', () => {
    const dummyGame = {
      random: 'data',
      what: 'ever',
    };

    const strategy = new GameDataStrategy();
    const formatter = new ObjectFormatter(strategy);
    const result = () => {
      formatter.format(dummyGame);
    };

    expect(result).toThrow();
  });
});
