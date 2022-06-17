import Cover from '../game/Cover.js';
import Price from '../game/Price';
import Title from '../game/Title.js';
import styles from '../../styles/components/search/GameItem.module.scss';
import GradientBorder from '../wrapper/GradientBorder.js';
import Score from '../game/Score';
import axios from 'axios';

const sshProtocol = 'http://';
const domain = 'localhost:8000';
const path = '/api/game/prices/';

const GameItem = (props) => {
  let url = sshProtocol + domain + path;
  let title = null;
  let score = null;
  let bestPrice = null;

  if (props.gameData) {
    const { gameData } = props;
    const { id } = gameData;
    bestPrice = gameData.price;
    url = url + String(id);
    const fetchGameData = async () => {
      const response = await axios.get(url);
      console.log(response.data);
      const { data } = response;
      const { game } = data;
      const { name: title } = game;
      const { score } = game;
      return {
        title,
        score,
      };
    };
    const fetchedData = fetchGameData();
    title = fetchedData.title;
    score = fetchedData.score;
  }

  return (
    <GradientBorder className={styles['game-item-wrapper']}>
      <article data-testid='game-item' className={styles['game-item']}>
        <Cover src={props.image} alt={title} />
        <div className={styles['game-item__description']}>
          <div className={styles['game-item__title']}>
            <Title value={title} />
            <Score value={score} />
          </div>
          <Price value={bestPrice} />
        </div>
      </article>
    </GradientBorder>
  );
};

export default GameItem;
