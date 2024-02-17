import Logo from '@/shared/assets/logo.svg?react';
import MapIcon from '@/shared/assets/map.svg?react';
import PhoneIcon from '@/shared/assets/phone.svg?react';
import { useEffect, useState } from 'react';

import { ROUTER_PATHS } from '@/shared/constants';
import { Button, HeaderLink, Icon } from '@/shared/ui';

import st from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    if (isOpen) body.classList.add('scroll_block');
    else body.classList.remove('scroll_block');
  }, [isOpen]);

  return (
    <header className={st.header}>
      <div className={`container`}>
        <div className={` ${isOpen ? st.burger__btn_active : ''} ${st.body}`}>
          <HeaderLink to={ROUTER_PATHS.main}>
            <Logo className={st.logo} />
          </HeaderLink>
          <Button
            variant="text"
            className={`${st.burger__btn}`}
            onClick={() => setIsOpen(!isOpen)}
            startIcon={
              <div className={st.burger}>
                <div className={st.burger__line}></div>
              </div>
            }
          />
          <nav className={st.nav}>
            <a
              className={st.nav__link}
              href={ROUTER_PATHS.about}
              onClick={handleClose}>
              About Us
            </a>
            <HeaderLink
              to={ROUTER_PATHS.masters}
              className={st.nav__link}
              onClick={handleClose}>
              Our Masters
            </HeaderLink>
            <a
              className={st.nav__link}
              href={ROUTER_PATHS.about}
              onClick={handleClose}>
              Portfolio
            </a>
            <a
              className={st.nav__link}
              href={ROUTER_PATHS.testimonials}
              onClick={handleClose}>
              Testimonials
            </a>
            <a
              className={st.nav__link}
              href={ROUTER_PATHS.contacts}
              onClick={handleClose}>
              Contacts
            </a>
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
                  <PhoneIcon />
                </Icon>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
