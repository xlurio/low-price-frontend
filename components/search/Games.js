import GameItem from './GameItem';
import styles from '../../styles/components/search/Games.module.scss';
import ObjectFormatter from '../../services/validators/object-formatter/ObjectFormatter';
import GameDataStrategy from '../../services/validators/object-formatter/strategies/GameDataStrategy';

const testImage = '/images/test/testGameImage.jpg';

const strategy = new GameDataStrategy();
const formatter = new ObjectFormatter(strategy);

const convertToGameItem = (gameData) => {
  const formattedData = formatter.format(gameData);
  return <GameItem key={formattedData.id} gameData={formattedData} />;
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
