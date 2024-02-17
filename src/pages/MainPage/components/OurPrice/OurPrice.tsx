import { Price } from '@/components/Price';
import PriceItem from '@/components/Price/PriceItem';

import img1 from '@/shared/assets/prices/1.jpg';
import img2 from '@/shared/assets/prices/2.jpg';
import img3 from '@/shared/assets/prices/3.jpg';
import img4 from '@/shared/assets/prices/4.jpg';

import st from './OurPrice.module.scss';

const OurPrice = () => {
  return (
    <section className={st.prices}>
      <div className={`container ${st.prices__header}`}>
        <h2>OurPrice</h2>
        <div className={`subtitle ${st.prices__subtitle}`}>
          Subheading that reveals the details of the title and calls for the
          targeted action
        </div>
      </div>
      <div className={`container ${st.prices__body}`}>
        <Price
          price={{ id: 0, img: img1, title: 'Haircuts' }}
          className={st.prices__price}>
          <PriceItem
            price={{ price: 20, time: 60, title: 'Regular Haircut' }}
          />
          <PriceItem
            price={{ price: 19, time: 60, title: 'Haircut + Shave' }}
          />
          <PriceItem
            price={{ price: 30, time: 60, title: 'Haircut + Beard Trim' }}
          />
          <PriceItem price={{ price: 22, time: 60, title: 'Beard Trim' }} />
          <PriceItem price={{ price: 45, time: 60, title: 'Hair Tatoo' }} />
          <PriceItem price={{ price: 15, time: 60, title: 'Facial' }} />
        </Price>
        <Price
          price={{ id: 1, img: img2, title: 'Beard & Mo' }}
          className={st.prices__price}>
          <PriceItem
            price={{ price: 20, time: 60, title: 'Regular Haircut' }}
          />
          <PriceItem
            price={{ price: 19, time: 60, title: 'Haircut + Shave' }}
          />
          <PriceItem
            price={{ price: 30, time: 60, title: 'Haircut + Beard Trim' }}
          />
          <PriceItem price={{ price: 22, time: 60, title: 'Beard Trim' }} />
          <PriceItem price={{ price: 45, time: 60, title: 'Hair Tatoo' }} />
          <PriceItem price={{ price: 15, time: 60, title: 'Facial' }} />
        </Price>
        <Price
          price={{ id: 2, img: img3, title: 'Shaving' }}
          className={st.prices__price}>
          <PriceItem
            price={{ price: 20, time: 60, title: 'Regular Haircut' }}
          />
          <PriceItem
            price={{ price: 19, time: 60, title: 'Haircut + Shave' }}
          />
          <PriceItem
            price={{ price: 30, time: 60, title: 'Haircut + Beard Trim' }}
          />
          <PriceItem price={{ price: 22, time: 60, title: 'Beard Trim' }} />
          <PriceItem price={{ price: 45, time: 60, title: 'Hair Tatoo' }} />
          <PriceItem price={{ price: 15, time: 60, title: 'Facial' }} />
        </Price>
        <Price
          price={{ id: 3, img: img4, title: 'Waxing' }}
          className={st.prices__price}>
          <PriceItem
            price={{ price: 20, time: 60, title: 'Regular Haircut' }}
          />
          <PriceItem
            price={{ price: 19, time: 60, title: 'Haircut + Shave' }}
          />
          <PriceItem
            price={{ price: 30, time: 60, title: 'Haircut + Beard Trim' }}
          />
          <PriceItem price={{ price: 22, time: 60, title: 'Beard Trim' }} />
          <PriceItem price={{ price: 45, time: 60, title: 'Hair Tatoo' }} />
          <PriceItem price={{ price: 15, time: 60, title: 'Facial' }} />
        </Price>
      </div>
    </section>
  );
};

export default OurPrice;
