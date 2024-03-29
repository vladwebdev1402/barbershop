import { FC, ReactNode } from 'react';

import st from './Advantages.module.scss';

interface AdvantageProps {
  Icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Advantage: FC<AdvantageProps> = ({
  Icon,
  description,
  title,
  className = '',
}) => {
  return (
    <div className={`${className} ${st.advantage}`}>
      <div className={st.advantage__icon}>{Icon}</div>
      <div className={st.advantage__title}>{title}</div>
      <div className={st.advantage__desc}>{description}</div>
    </div>
  );
};

export default Advantage;
