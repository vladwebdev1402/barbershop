import { AboutUs } from './components/AboutUs';
import { Advantages } from './components/Advantages';
import { Hero } from './components/Hero';
import { OurPrice } from './components/OurPrice';
import { Testimonials } from './components/Testimonials';

const MainPage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <AboutUs />
      <Testimonials />
      <OurPrice />
    </>
  );
};

export default MainPage;
