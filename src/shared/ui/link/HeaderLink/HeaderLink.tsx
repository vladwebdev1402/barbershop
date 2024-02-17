import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import st from './HeaderLink.module.scss';

interface HeaderLinkProps {
  children: ReactNode;
  to: string;
  className?: string;
  onClick?: () => void;
}

const HeaderLink: FC<HeaderLinkProps> = ({
  children,
  to,
  className = '',
  onClick,
}) => {
  return (
    <Link to={to} className={`${className} ${st.link}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export default HeaderLink;
