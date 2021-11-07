// Import JSS
import { createUseStyles } from 'react-jss';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';
import { getFormattedAmount } from 'src/common/utils/amountUtil';

// Styles
const useStyles = createUseStyles({
  basket_total: {
    border: `2px solid ${CUSTOM_COLORS.MAIN_BLUE}`,
    fontSize: '14px',
    padding: '18px 24px',
    width: '92px',
    color: CUSTOM_COLORS.MAIN_BLUE,
    textAlign: 'center'
  }
});

function BasketTotal() {
  // Styles const
  const classes = useStyles();

  return <div className={classes.basket_total}>{getFormattedAmount(39.99)}</div>;
}

export default BasketTotal;
