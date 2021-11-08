// Import React
import { useSelector } from 'react-redux';

// Import JSS
import { createUseStyles } from 'react-jss';

// Import Antd
import { Row, Empty } from 'antd';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import Store
import { RootState } from 'src/store/store';

// Import Components
import BasketItem from './BasketItem';
import BasketTotal from './BasketTotal';

// Styles
const useStyles = createUseStyles({
  basket_item_container: {
    backgroundColor: CUSTOM_COLORS.WHITE,
    borderRadius: '2px',
    padding: '25px',
    border: `6px solid ${CUSTOM_COLORS.MAIN_BLUE}`
  }
});

function Basket() {
  const basketState = useSelector((state: RootState) => state?.basket);

  // Styles const
  const classes = useStyles();

  return (
    <div className={classes.basket_item_container}>
      {basketState?.basket.length < 1 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No item" />}
      {basketState?.basket?.map((item, index) => (
        <BasketItem key={index} item={item} index={index} />
      ))}

      <Row justify="end">
        <BasketTotal total={basketState?.total} />
      </Row>
    </div>
  );
}

export default Basket;
