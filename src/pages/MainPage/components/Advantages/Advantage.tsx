import { FC, ReactNode } from 'react';

import st from './Advantages.module.scss';

interface AdvantageProps {
  Icon: ReactNode;
  title: string;
  description: string;
}

const Advantage: FC<AdvantageProps> = ({ Icon, description, title }) => {
  return (
    <div className={st.advantage}>
      <div className={st.icon}>{Icon}</div>
      <div className={st.title}>{title}</div>
      <div className={st.desc}>{description}</div>
    </div>
  );
};

export default Advantage;
