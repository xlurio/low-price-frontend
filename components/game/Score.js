import styles from '../../styles/components/game/Score.module.scss';

function Score(props) {
  const classes = `${styles['score']} ${props.className}`;
  return (
    <div className={classes} data-testid='score'>
      {props.value || ''}
    </div>
  );
}

export default Score;
