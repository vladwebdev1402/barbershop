import { ComponentPropsWithRef, FC } from 'react';

import st from './Icon.module.scss';

const Icon: FC<ComponentPropsWithRef<'div'>> = ({
  children,
  className = '',
}) => {
  return <div className={`${className} ${st.icon}`}>{children}</div>;
};

export default Icon;
