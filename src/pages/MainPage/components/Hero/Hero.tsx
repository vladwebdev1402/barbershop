import { Button } from '@/shared/ui';

import st from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`container ${st.hero}`}>
      <div className={st.head}>
        <h1 className={st.title}>Men’s Barbershop in The Middle East</h1>
        <div className={st.subtile}>
          <Button variant="outlined" className={st.button_rated}>
            THE HIGHEST RATED
          </Button>
          <div className={st.subtile_txt}>
            Text that is placed at the bottom of the heading to reveal details
          </div>
        </div>
      </div>
      <Button className={st.button_book}>Book now</Button>
    </section>
  );
};

export default Hero;
