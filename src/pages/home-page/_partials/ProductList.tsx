// Import Antd
import { Row, Col } from 'antd';
import Pagination from 'src/components/pagination/Pagination';

// Import Components
import Box from '../../../components/box/Box';
import Product from './Product';

function ProductList() {
  function itemRender(_, type, originalElement) {
    if (type === 'prev') {
      return <a>Prev</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }

  return (
    <Row>
      <Col span={24}>
        <Box title="GLOBAL.TITLES.PRODUCTS" titleSize="20px" titleWeight={400}>
          <Product />
        </Box>
      </Col>
      <Col span={24}>
        <Pagination total={500} showSizeChanger={false} itemRender={itemRender} />
      </Col>
    </Row>
  );
}

export default ProductList;
