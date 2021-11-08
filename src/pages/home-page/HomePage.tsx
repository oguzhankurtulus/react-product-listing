// Import JSS
import { createUseStyles } from 'react-jss';

// Import antd
import { Row, Col } from 'antd';

// Import Utils
import { translate } from 'src/common/utils/translateUtil';

// Import I18N
import i18n from 'src/common/locales/i18n';

// Import Components
import DefaultLayout from '../../layouts/DefaultLayout';
import Basket from './_partials/Basket';
import HomePageFilter from './_partials/HomePageFilter';
import ProductList from './_partials/ProductList';
import RadioGroup from 'src/components/form-elements/radio/RadioGroup';
import FormApp from 'src/components/form-elements/form/FormApp';

// Styles
const useStyles = createUseStyles({
  language: {
    position: 'fixed',
    right: 5,
    bottom: 5
  }
});

function HomePage() {
  // Styles const
  const classes = useStyles();

  const radioOptions = [
    { label: translate('LANGUAGE.EN'), value: 'en' },
    { label: translate('LANGUAGE.TR'), value: 'tr' }
  ];

  // Functions
  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <DefaultLayout>
      <Row gutter={16}>
        {/* FILTER */}
        <Col span={6}>
          <HomePageFilter />
        </Col>

        {/* PRODUCTS */}
        <Col span={12}>
          <ProductList />
        </Col>

        {/* BASKET */}
        <Col span={6}>
          <Basket />
        </Col>

        {/* LANGUAGE */}
        <div className={classes.language}>
          <FormApp name="languageForm">
            <RadioGroup defaultValue={'en'} name="language" options={radioOptions} onChange={handleChangeLanguage} />
          </FormApp>
        </div>
      </Row>
    </DefaultLayout>
  );
}

export default HomePage;
