// Import React
import { useSelector } from 'react-redux';

// Import JSS
import { createUseStyles } from 'react-jss';

// Import Antd
import { Row } from 'antd';

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
  const basketState = useSelector((state: RootState) => state?.basket.basket);

  // Styles const
  const classes = useStyles();

  return (
    <div className={classes.basket_item_container}>
      {basketState?.map((item, index) => (
        <BasketItem key={index} item={item} />
      ))}

      <Row justify="end">
        <BasketTotal />
      </Row>
    </div>
  );
}

export default Basket;
