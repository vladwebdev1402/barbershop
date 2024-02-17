import classNames from 'classnames';

import { ComponentPropsWithRef, FC, ReactNode } from 'react';

import st from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'orange' | 'balck';
  startIcon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  color = 'orange',
  className = '',
  startIcon,
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
      {startIcon}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
