import BarberIcon from '@/shared/assets/barbershop.svg?react';
import BeardIcon from '@/shared/assets/beard.svg?react';
import HairIcon from '@/shared/assets/hair.svg?react';

import Advantage from './Advantage';
import st from './Advantages.module.scss';

const Advantages = () => {
  return (
    <section className={st.advantages}>
      <div className={`container ${st.advantages__body}`}>
        <Advantage
          Icon={<BarberIcon />}
          title="Briefly describe the benefit"
          description="Long text, in two lines, for clarity and detail"
        />
        <Advantage
          Icon={<BeardIcon />}
          title="Briefly describe the benefit"
          description="Long text, in two lines, for clarity and detail"
        />
        <Advantage
          Icon={<HairIcon />}
          title="Briefly describe the benefit"
          description="Long text, in two lines, for clarity and detail Long text, in two lines, for clarity and detail"
        />
      </div>
    </section>
  );
};

export default Advantages;
