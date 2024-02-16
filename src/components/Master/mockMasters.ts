import ava2 from '@/shared/assets/masters/ava2.jpg';
import ava3 from '@/shared/assets/masters/ava3.jpg';
import ava1 from '@/shared/assets/masters/ava.jpg';
import work1 from '@/shared/assets/masters/work1.jpg';
import work2 from '@/shared/assets/masters/work2.jpg';
import work3 from '@/shared/assets/masters/work3.jpg';
import work4 from '@/shared/assets/masters/work4.jpg';
import work5 from '@/shared/assets/masters/work5.jpg';
import work6 from '@/shared/assets/masters/work6.jpg';
import work7 from '@/shared/assets/masters/work7.jpg';
import work8 from '@/shared/assets/masters/work8.jpg';

import { IMaster } from '.';

export const mockMasters: IMaster[] = [
  {
    id: 0,
    ava: ava1,
    desc: 'Description of the master, his education, achievements and merits. Description of the master, his education, achievements and merits',
    name: 'Devon Lane',
    works: [work1, work2, work3, work4, work5, work6, work7, work8],
  },
  {
    id: 1,
    ava: ava2,
    desc: 'Description of the master, his education, achievements and merits. Description of the master, his education, achievements and merits',
    name: 'Ronald Richards',
    works: [work1, work2, work3, work4, work5, work6, work7, work8],
  },
  {
    id: 2,
    ava: ava3,
    desc: 'Description of the master, his education, achievements and merits. Description of the master, his education, achievements and merits',
    name: 'Jane Cooper',
    works: [work1, work2, work3, work4, work5, work6, work7, work8],
  },
];
