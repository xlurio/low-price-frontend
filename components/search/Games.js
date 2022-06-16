import GameItem from './GameItem';
import styles from '../../styles/components/search/Games.module.scss';

const testImage = '/images/test/testGameImage.jpg';

const Games = (props) => {
  return (
    <section data-testid={props['data-testid']} className={styles['games']}>
      <GameItem
        title='Tomb Raider'
        price='34.99'
        score='86'
        image={testImage}
      />
      <GameItem
        title='Tomb Raider'
        price='34.99'
        score='86'
        image={testImage}
      />
      <GameItem
        title='Tomb Raider'
        price='34.99'
        score='86'
        image={testImage}
      />
      <GameItem
        title='Tomb Raider'
        price='34.99'
        score='86'
        image={testImage}
      />
    </section>
  );
};

export default Games;
