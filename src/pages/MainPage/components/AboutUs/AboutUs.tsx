import img2 from '@/shared/assets/images-about/photo-1.jpg';
import img3 from '@/shared/assets/images-about/photo-2.jpg';
import img4 from '@/shared/assets/images-about/photo-3.jpg';
import img5 from '@/shared/assets/images-about/photo-4.jpg';
import img6 from '@/shared/assets/images-about/photo-5.jpg';
import img1 from '@/shared/assets/images-about/photo.jpg';
import { Button } from '@/shared/ui';

import st from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section id="about" className={`container ${st.about}`}>
      <div className={st.about__head}>
        <h2 className={st.title}>About Us</h2>
        <div className={`subtitle ${st.about__subtitle}`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        </div>
      </div>
      <div className={st.about__body}>
        <div>
          <img src={img1} alt="Фотография" loading="lazy" />
        </div>
        <div className={st.about__group}>
          <img src={img2} alt="Фотография" loading="lazy" />
          <img src={img3} alt="Фотография" loading="lazy" />
        </div>
        <div className={st.about__group}>
          <img src={img4} alt="Фотография" loading="lazy" />
          <img src={img5} alt="Фотография" loading="lazy" />
        </div>
        <div>
          <img src={img6} alt="Фотография" loading="lazy" />
        </div>
      </div>
      <div className={st.about__footer}>
        <Button>Our masters and their masterpieces</Button>
        <Button variant="outlined">Our Instagram</Button>
      </div>
    </section>
  );
};

export default AboutUs;
