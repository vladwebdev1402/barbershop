import { ComponentPropsWithRef, FC } from 'react';

import st from './Price.module.scss';
import { IPriceItem } from './type';

interface PriceItemProps extends ComponentPropsWithRef<'div'> {
  price: IPriceItem;
}

const PriceItem: FC<PriceItemProps> = ({ price, className = '' }) => {
  return (
    <div className={`${className} ${st.priceItem}`}>
      <div className={st.priceItem__title}>{price.title}</div>
      <div className={st.priceItem__info}>
        <div className={st.priceItem__time}>{price.time} min</div>
        <div className={st.priceItem__price}>${price.price}</div>
      </div>
    </div>
  );
};

export default PriceItem;
