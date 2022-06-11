import styles from '../../styles/components/text-input/TextInput.module.scss';

const TextInput = (props) => {
  const classNames = `${styles['text-input']} ${props.className}`;

  const changeTextInput = (event) => {
    const { target } = event;
    const { value } = target;
    props.onChange(value);
  };

  return (
    <input
      className={classNames}
      data-testid={props['data-testid'] || 'text-input'}
      onChange={changeTextInput}
      placeholder={props.placeholder}
      type='text'
      value={props.value}
    />
  );
};

export default TextInput;
