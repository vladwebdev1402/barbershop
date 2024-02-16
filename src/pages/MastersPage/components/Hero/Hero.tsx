import st from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`container ${st.hero}`}>
      <h1 className={st.hero__title}>
        Our craftsmen make visitors beautiful and happier
      </h1>
      <div className={st.hero__subtitle}>
        Text placed at the bottom of the title to reveal details
      </div>
    </section>
  );
};

export default Hero;
