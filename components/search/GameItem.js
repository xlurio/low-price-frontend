import Cover from '../game/Cover.js';
import Price from '../game/Price';
import Title from '../game/Title.js';
import styles from '../../styles/components/search/GameItem.module.scss';
import GradientBorder from '../wrapper/GradientBorder.js';
import Score from '../game/Score';

const GameItem = (props) => {
  return (
    <GradientBorder className={styles['game-item-wrapper']}>
      <article className={styles['game-item']}>
        <Cover src={props.image} alt={props.title} />
        <div className={styles['game-item__description']}>
          <div className={styles['game-item__title']}>
            <Title value={props.title} />
            <Score value={props.score} />
          </div>

          <Price value={props.bestPrice} />
        </div>
      </article>
    </GradientBorder>
  );
};

export default GameItem;
