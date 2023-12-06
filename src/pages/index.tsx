import VerticalLayout from '@app/layouts/verticalLayout';
import { APP_ROUTE } from '../constants/route.constants';
import Page404 from './Page404';
import Page500 from './Page500';
import HomePage from './Home';
import SettingPage from './Setting';
import CitiesPage from './Cities';

export interface IRoute {
  path: string;
  element: JSX.Element;
  index?: boolean;
  children?: Array<IRoute>;
}

export const appRoute: IRoute[] = [
  {
    path: APP_ROUTE.HOME,
    element: (
      <VerticalLayout>
        <HomePage />
      </VerticalLayout>
    ),
  },
  {
    path: APP_ROUTE.CITIES,
    element: (
      <VerticalLayout>
        <CitiesPage />
      </VerticalLayout>
    ),
  },
  {
    path: APP_ROUTE.SETTINGS,
    element: (
      <VerticalLayout>
        <SettingPage />
      </VerticalLayout>
    ),
  },
  {
    path: APP_ROUTE.MATCH_ALL,
    element: <Page404 />,
  },
];

export const allAppRoutes = () =>
  appRoute.map((e) => ({
    ...e,
    errorElement: <Page500 />,
  }));
