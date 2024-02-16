import { Master, mockMasters } from '@/components/Master';

import st from './Masters.module.scss';

const Masters = () => {
  return (
    <section className={`container ${st.masters}`}>
      {mockMasters.map((master) => (
        <Master
          key={master.id}
          master={master}
          className={st.masters__master}
        />
      ))}
    </section>
  );
};

export default Masters;
