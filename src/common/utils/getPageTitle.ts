import { routes } from 'src/routes/routes';

export const getPageTitle = () => {
  let title = '';

  routes?.map((route) => route?.path === location?.pathname && (title = route?.title));

  return title;
};
