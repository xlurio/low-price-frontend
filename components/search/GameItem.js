import Cover from '../game/Cover.js';
import Price from '../game/Price';
import styles from '../../styles/components/search/GameItem.module.scss';
import GradientBorder from '../wrapper/GradientBorder.js';
import MetaData from '../game/MetaData.js';
import GeneralData from '../game/GeneralData';

const GameItem = (props) => {
  const { title } = props.gameData;
  const { score } = props.gameData;
  const { bestPrice } = props.gameData;

  const gameItemElement = (
    <article data-testid='game-item' className={styles['game-item']}>
      <Cover src={props.image} alt={props.title} />
      <GeneralData title={title} score={score} bestPrice={bestPrice} />
    </article>
  );

  return (
    <GradientBorder className={styles['game-item-wrapper']}>
      {gameItemElement}
    </GradientBorder>
  );
};

export default GameItem;
