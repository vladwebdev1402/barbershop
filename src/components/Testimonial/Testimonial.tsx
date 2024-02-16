import { ComponentPropsWithRef, FC } from 'react';

import { ITestimonial } from '.';
import st from './Testimonial.module.scss';

interface TestimonialProps extends ComponentPropsWithRef<'div'> {
  testiomonial: ITestimonial;
}

const Testimonial: FC<TestimonialProps> = ({
  testiomonial,
  className = '',
}) => {
  return (
    <div className={`${className} ${st.testimonial}`}>
      <div className={st.head}>
        <img
          src={testiomonial.img}
          alt="testiomonial"
          loading="lazy"
          draggable={false}
        />
      </div>
      <div className={st.name}>{testiomonial.name}</div>
      <div className={st.desc}>{testiomonial.desc}</div>
      <a className={st.link} href={testiomonial.link}>
        Read full testimonial
      </a>
    </div>
  );
};

export default Testimonial;
