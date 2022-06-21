import styles from '../../styles/components/game/MetaData.module.css';

import Title from './Title';
import Score from './Score';

const MetaData = (props) => {
  return (
    <div className={styles['metadata']}>
      <Title value={props.title} />
      <Score value={props.score} />
    </div>
  );
};

export default MetaData;
