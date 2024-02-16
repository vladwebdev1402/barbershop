import { AboutUs } from './components/AboutUs';
import { Advantages } from './components/Advantages';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';

const MainPage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <AboutUs />
      <Testimonials />
    </>
  );
};

export default MainPage;
