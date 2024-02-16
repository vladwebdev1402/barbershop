import classNames from 'classnames';

import { ComponentPropsWithRef, FC } from 'react';

import st from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'contained' | 'outlined';
  color?: 'orange' | 'balck';
}

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  color = 'orange',
  className = '',
  children,
  ...props
}) => {
  const buttonClasses = classNames(className, st.button, {
    [st.button_contained]: variant === 'contained',
    [st.button_outlined]: variant === 'outlined',
    [st.button_orange]: color === 'orange',
    [st.button_black]: color === 'balck',
  });

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
