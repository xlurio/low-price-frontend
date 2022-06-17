import GameItem from './GameItem';
import styles from '../../styles/components/search/Games.module.scss';

const testImage = '/images/test/testGameImage.jpg';

const convertToGameItem = (gameData) => {
  return <GameItem key={gameData.id} gameData={gameData} />;
};

const Games = (props) => {
  const items = props.items || [];

  return (
    <section data-testid={props['data-testid']} className={styles['games']}>
      {items.map(convertToGameItem)}
    </section>
  );
};

export default Games;
