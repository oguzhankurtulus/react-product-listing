// Import React
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import JSS
import { createUseStyles } from 'react-jss';

// Import Antd
import { Row, Col, Spin } from 'antd';

// Import Store
import { RootState } from '../../../store/store';
import { getItems } from '../../../store/actions/items/getItem';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';
import { ICON_LIST } from 'src/common/constants/icon/iconList';

// Import Components
import Box from '../../../components/box/Box';
import Product from './Product';
import Pagination from 'src/components/pagination/Pagination';
import Icon from 'src/components/icon/Icon';

// Styles
const useStyles = createUseStyles({
  left: {
    marginRight: '56px',
    '& svg': {
      marginRight: '5px'
    }
  },
  right: {
    marginLeft: '56px',
    '& svg': {
      marginLeft: '5px'
    }
  },
  pagination: {
    marginBottom: '20px'
  }
});

function ProductList() {
  // Variables
  const dispatch = useDispatch();
  const productListState = useSelector((state: RootState) => state?.globalReducer?.getItems);

  // Styles const
  const classes = useStyles();

  function itemRender(_, type, originalElement) {
    if (type === 'prev') {
      return (
        <a className={classes.left}>
          <Icon color={CUSTOM_COLORS.MAIN_BLUE} size="xs" icon={ICON_LIST.LEFT} />
          Prev
        </a>
      );
    }
    if (type === 'next') {
      return (
        <a className={classes.right}>
          Next
          <Icon color={CUSTOM_COLORS.MAIN_BLUE} size="xs" icon={ICON_LIST.RIGHT} />
        </a>
      );
    }
    return originalElement;
  }

  // Functions
  const handlePagination = (page) => {
    const variables = {
      page
    };

    dispatch(getItems(variables));
  };

  useEffect(() => {
    const variables = {
      page: 1,
      sort: 'price',
      order: 'asc'
    };

    dispatch(getItems(variables));
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Box title="GLOBAL.TITLES.PRODUCTS" titleSize="20px" titleWeight={400}>
          {productListState?.isLoading ? (
            <Spin />
          ) : (
            <Row gutter={[24, 21]}>
              {productListState?.success?.data?.map((item, index) => (
                <Col sm={12} md={24} lg={12} xl={12} xxl={6} key={index}>
                  <Product key={index} item={item} />
                </Col>
              ))}
            </Row>
          )}
        </Box>
      </Col>
      {productListState?.success && (
        <Col span={24}>
          <Row justify="center" className={classes.pagination}>
            <Pagination
              total={productListState?.success?.headers?.['x-total-count']}
              defaultPageSize={16}
              showSizeChanger={false}
              itemRender={itemRender}
              onChange={handlePagination}
            />
          </Row>
        </Col>
      )}
    </Row>
  );
}

export default ProductList;
