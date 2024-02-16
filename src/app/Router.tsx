import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { MasterPage } from '@/pages/MastersPage';

import { ROUTER_PATHS } from '@/shared/constants';

import Root from './Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTER_PATHS.main} element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path={ROUTER_PATHS.masters} element={<MasterPage />} />
    </Route>
  )
);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
