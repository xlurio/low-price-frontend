import styles from '../../styles/components/wrapper/GradientBorder.module.scss';

function GradientBorder(props) {
  const classes = `${styles['gradient-border']} ${props.className}`;

  return (
    <div className={classes} data-testid='gradient-border'>
      {props.children}
    </div>
  );
}

export default GradientBorder;
