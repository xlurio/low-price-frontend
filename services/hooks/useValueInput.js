import { useState } from 'react';

const useValueInput = (initialValue = '') => {
  const [valueInput, setValueInput] = useState(initialValue);

  const changeValueInput = (newValue) => {
    setValueInput(newValue);
  };

  return [valueInput, changeValueInput];
};

export default useValueInput;
