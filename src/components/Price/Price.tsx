import { ComponentPropsWithRef, FC } from 'react';

import st from './Price.module.scss';
import { IPrice } from './type';

interface PriceProps extends ComponentPropsWithRef<'div'> {
  price: IPrice;
}

const Price: FC<PriceProps> = ({ price, className = '', children }) => {
  return (
    <div className={`${className}`}>
      <div className={st.price}>
        <div className={st.price__img}>
          <img src={price.img} alt="price" />
        </div>
        <div className={st.price__title}>{price.title}</div>
        <div className={st.price__body}>{children}</div>
      </div>
    </div>
  );
};

export default Price;
