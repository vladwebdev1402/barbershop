import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import st from './HeaderLink.module.scss';

interface HeaderLinkProps {
  children: ReactNode;
  to: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ children, to }) => {
  return (
    <Link to={to} className={st.link}>
      {children}
    </Link>
  );
};

export default HeaderLink;
