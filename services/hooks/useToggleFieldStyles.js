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
    setStylesOn(true);
  };

  const toggleStylesOff = () => {
    setStylesOn(false);
  };

  return [classes, placeholder, toggleStylesOn, toggleStylesOff];
};

export default useToggleFieldStyles;
