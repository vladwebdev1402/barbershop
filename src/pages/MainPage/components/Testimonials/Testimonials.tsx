import { Testimonial } from '@/components/Testimonial';
import { mockTestimonial } from '@/components/Testimonial/mock';

import { Slider } from '@/shared/ui';

import st from './Testimonials.module.scss';

const Testimonials = () => {
  return (
    <section id="testimonials" className={`container ${st.testimonials}`}>
      <div className={st.testimonials__header}>
        <h2>Testimonials</h2>
        <div className={`subtitle ${st.testimonials__subtitle}`}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        </div>
      </div>
      <Slider
        spaceBetween={20}
        freeMode
        countPagItem={2}
        st__slider__container={st.testimonials__slider}
        st__pag__btn__next={st.testimonials__next}
        st__pag__btn__prev={st.testimonials__prev}>
        {mockTestimonial.map((testimonial) => (
          <Testimonial key={testimonial.id} testiomonial={testimonial} />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
