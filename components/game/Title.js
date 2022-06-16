import React from 'react';
import styles from '../../styles/components/game/Title.module.css';

function Title(props) {
  const classes = `${props.className}`;

  return (
    <div className={classes} data-testid='title'>
      <h2 className={styles['title']}>{props.value}</h2>
    </div>
  );
}

export default Title;
