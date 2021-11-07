// Import antd
import { Row, Col } from 'antd';

// Import Components
import DefaultLayout from '../../layouts/DefaultLayout';
import Basket from './_partials/Basket';
import HomePageFilter from './_partials/HomePageFilter';
import ProductList from './_partials/ProductList';

function HomePage() {
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
      </Row>
    </DefaultLayout>
  );
}

export default HomePage;
