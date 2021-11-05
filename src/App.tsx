// Import React
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Import Constants
import { LOADING_TYPES } from './common/constants/loading/loadingTypes';

// Import Components
import Loading from './components/loading/Loading';
import NotFound from './pages/error-pages/not-found/NotFound';

// Import Routes
import { routes } from './routes/routes';

// Import Ant
import { ConfigProvider } from 'antd';
import trTR from 'antd/lib/locale/tr_TR';
import enUs from 'antd/lib/locale/en_US';

// i18n Import
import i18n from './common/locales/i18n';

// Import Styles
import 'antd/dist/antd.css';

function App() {
  return (
    <ConfigProvider locale={i18n?.language === 'tr' ? trTR : enUs}>
      <Suspense fallback={<Loading loading={true} loadingType={LOADING_TYPES.FULLSCREEN} />}>
        <Switch>
          {/* Page url's */}
          {routes?.map((route, index) => (
            <Route key={`route_${index}`} exact path={route?.path} component={route?.component} />
          ))}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </ConfigProvider>
  );
}
export default withTranslation()(App);
