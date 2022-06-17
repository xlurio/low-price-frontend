import { useState } from 'react';

const defaultOptions = {
  initialValue: '',
};

const useValueInput = (options = defaultOptions) => {
  const { initialValue } = options;
  const [valueInput, setValueInput] = useState(initialValue);

  const changeValueInput = (newValue) => {
    options.onChangeCallback ? options.onChangeCallback(newValue) : '';
    setValueInput(newValue);
  };

  return [valueInput, changeValueInput];
};

export default useValueInput;
