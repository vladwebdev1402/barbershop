import RefreshIcon from '@/shared/assets/refrech.svg?react';
import { ComponentPropsWithRef, FC } from 'react';

import { Button } from '@/shared/ui';

import { IMaster } from '.';
import st from './Master.module.scss';

interface MasterProps extends ComponentPropsWithRef<'div'> {
  master: IMaster;
}

const Master: FC<MasterProps> = ({ master, className = '' }) => {
  return (
    <div className={`${className}`}>
      <div className={st.master__head}>
        <div className={st.master__ava}>
          <img src={master.ava} alt="ava" />
        </div>
        <div className={st.master__name}>{master.name}</div>
        <div className={st.master__desc}>{master.desc}</div>
      </div>
      <div className={st.master__body}>
        {master.works.map((work) => (
          <img key={Math.random()} src={work} alt="work" />
        ))}
      </div>
      <div className={st.master__footer}>
        <Button
          startIcon={<RefreshIcon className={st.master__see_icon} />}
          className={st.master__see}>
          See all works
        </Button>
      </div>
    </div>
  );
};

export default Master;
