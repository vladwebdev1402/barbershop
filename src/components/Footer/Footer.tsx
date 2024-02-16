import MailIcon from '@/shared/assets/mail.svg?react';
import MapIcon from '@/shared/assets/map.svg?react';
import PhoneIcon from '@/shared/assets/phone.svg?react';
import TimeIcon from '@/shared/assets/time.svg?react';

import { Icon } from '@/shared/ui';

import st from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={st.footer} id="contacts">
      <div className={st.contacts}>
        <div className={`container ${st.contacts__body}`}>
          <div className={st.contacts__card}>
            <h2>Contacts</h2>
            <ul className={st.contacts__contacts}>
              <li className={st.contacts__item}>
                <Icon>
                  <PhoneIcon />
                </Icon>
                <a href="#">8 (800) 000-00-00</a>
              </li>
              <li className={st.contacts__item}>
                <Icon>
                  <MailIcon />
                </Icon>
                <a href="#">info@sitename.com</a>
              </li>
              <li className={st.contacts__item}>
                <Icon>
                  <MapIcon />
                </Icon>
                <a href="#">302 W 50th St, NY, NY 10019</a>
              </li>
              <li className={st.contacts__item}>
                <Icon>
                  <TimeIcon />
                </Icon>
                <a href="#">Daily from 9 to 20</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={st.footer__desc}> © All rights reserved</div>
    </footer>
  );
};

export default Footer;
