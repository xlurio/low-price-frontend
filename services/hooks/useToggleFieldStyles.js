import { useState } from 'react';

const defaultFieldClasses = {
  initial: '',
  alternative: '',
};

const defaultFieldPlaceHolders = {
  initial: '',
  alternative: '',
};

const defaultFieldStyles = {
  classesOptions: defaultFieldClasses,
  placeholderOptions: defaultFieldPlaceHolders,
};

const useToggleFieldStyles = (options = defaultFieldStyles) => {
  const [isStylesOn, setStylesOn] = useState(false);
  const { classesOptions } = options;
  const { placeholderOptions } = options;

  const classes = isStylesOn
    ? classesOptions.alternative
    : classesOptions.initial;

  const placeholder = isStylesOn
    ? placeholderOptions.alternative
    : placeholderOptions.initial;

  const toggleStylesOn = () => {
    const toTrue = true;

    const { onFocusCallback } = options;
    onFocusCallback ? onFocusCallback(toTrue) : '';
    setStylesOn(toTrue);
  };

  const toggleStylesOff = () => {
    const toFalse = false;

    const { onFocusCallback } = options;
    onFocusCallback ? onFocusCallback(toFalse) : '';
    setStylesOn(toFalse);
  };

  return [classes, placeholder, toggleStylesOn, toggleStylesOff];
};

export default useToggleFieldStyles;
