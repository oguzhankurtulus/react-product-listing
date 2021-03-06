// Import React
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import JSS
import { createUseStyles } from 'react-jss';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import Utils
import { getFormattedAmount } from '../../../common/utils/amountUtil';

// Import Store
import { RootState } from 'src/store/store';

// Import Components
import Button from 'src/components/cta/button/Button';

// Styles
const useStyles = createUseStyles({
  product_container: {
    width: '124px'
  },
  image_container: {
    padding: '16px',
    height: '124px',
    width: '124px',
    borderRadius: '12px',
    border: `1.18px solid ${CUSTOM_COLORS.LIGHT_BORDER}`,
    backgroundColor: CUSTOM_COLORS.LIGHT_BACKGROUND,
    marginBottom: '8px',
    '& div': {
      backgroundColor: CUSTOM_COLORS.SECONDARY_BACKGROUND,
      width: '100%',
      height: '100%'
    }
  },
  price: {
    color: CUSTOM_COLORS.MAIN_BLUE,
    fontFamily: 'Helvetica',
    fontSize: '14px',
    marginBottom: '8px'
  },
  product_name: {
    color: CUSTOM_COLORS.BLACK_TEXT,
    fontSize: '14px',
    marginBottom: '8px'
  }
});

function Product(props) {
  const { item } = props;

  // Variables
  const dispatch = useDispatch();
  const basketState = useSelector((state: RootState) => state?.basket);
  const [itemInc, setItemInc] = useState(false);

  // Styles const
  const classes = useStyles();

  const handleAdd2Basket = (item) => {
    dispatch({
      type: 'NEW_ITEM_ADD',
      payload: item
    });
  };

  useEffect(() => {
    const isIncluded = basketState?.basket?.filter((x) => x?.name === item?.name)?.length > 0;

    if (isIncluded) {
      setItemInc(true);
    } else {
      setItemInc(false);
    }
  }, [basketState]);

  return (
    <div className={classes.product_container}>
      <div className={classes.image_container}>
        <div />
      </div>
      <div className={classes.price}>{getFormattedAmount(item?.price)}</div>
      <div className={classes.product_name}>{item?.name}</div>
      <Button
        type="primary"
        name="add_button"
        block
        label="GLOBAL.FORM_ELEMENTS.CTA.ADD"
        onClick={() => handleAdd2Basket(item)}
        disabled={itemInc}
      />
    </div>
  );
}

export default Product;
