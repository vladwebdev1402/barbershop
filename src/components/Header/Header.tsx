import Logo from '@/shared/assets/logo.svg?react';
import MapIcon from '@/shared/assets/map.svg?react';

import { ROUTER_PATHS } from '@/shared/constants';
import { HeaderLink, Icon } from '@/shared/ui';

import st from './Header.module.scss';

const Header = () => {
  return (
    <header className={st.header}>
      <div className={`container ${st.body}`}>
        <HeaderLink to={ROUTER_PATHS.main}>
          <Logo className={st.logo} />
        </HeaderLink>
        <nav className={st.nav}>
          <HeaderLink to={ROUTER_PATHS.about}>About Us</HeaderLink>
          <HeaderLink to={ROUTER_PATHS.masters}>Our Masters</HeaderLink>
          <HeaderLink to={ROUTER_PATHS.about}>Portfolio</HeaderLink>
          <HeaderLink to={ROUTER_PATHS.testimonials}>Testimonials</HeaderLink>
          <HeaderLink to={ROUTER_PATHS.contacts}>Contacts</HeaderLink>
        </nav>
        <div className={st.contacts}>
          <div className={st.contact__item}>
            <a className={`${st.link} ${st.address}`} href="#">
              302 W 50th St, NY, NY 10019
            </a>
            <Icon>
              <MapIcon />
            </Icon>
          </div>
          <div className={st.contact__item}>
            <div className={st.contact__subitem}>
              <a className={`${st.link} ${st.phone}`} href="#">
                8 (800) 000-00-00
              </a>
              <div className={st.time}>Daily from 9 to 20</div>
            </div>
            <Icon>
              <MapIcon />
            </Icon>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
