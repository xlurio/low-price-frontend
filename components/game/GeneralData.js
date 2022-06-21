import styles from '../../styles/components/game/GeneralData.module.css';

import MetaData from './MetaData';
import Price from './Price';

const GeneralData = (props) => {
  return (
    <div className={styles['general-data']}>
      <MetaData title={props.title} score={props.score} />
      <Price value={props.bestPrice} />
    </div>
  );
};

export default GeneralData;
