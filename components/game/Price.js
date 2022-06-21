import USAToEuropeanStrategy from '../../services/validators/number-formatter/strategies/USAToEuropeanStrategy.js';
import NumberFormatter from '../../services/validators/number-formatter/NumberFormatter.js';
import styles from '../../styles/components/game/Price.module.scss';

const usaToEuropean = new USAToEuropeanStrategy();
const numberFormatter = new NumberFormatter();
numberFormatter.strategy = usaToEuropean;

function Price(props) {
  const classes = `${styles['price']} ${props.className}`;

  const price = props.value || '0.00';
  const formattedPrice = numberFormatter.format(price);

  return <div className={classes}>R$ {formattedPrice}</div>;
}

export default Price;
