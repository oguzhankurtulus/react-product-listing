// Import React
import { lazy } from 'react';

// Kayıt İşlemleri
const HomePage = lazy(() => import('src/pages/home-page/HomePage'));

export const routes = [
  {
    title: 'PAGE_TITLES.HOME',
    exact: true,
    path: '/',
    component: HomePage
  }
];
