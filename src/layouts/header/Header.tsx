// Import JSS
import { createUseStyles } from 'react-jss';

// Import Assets
import Logo from '../../assets/img/Logo.svg';
import Basket from '../../assets/img/basket.svg';

// Import Utils
import { getFormattedAmount } from 'src/common/utils/amountUtil';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Styles
const useStyles = createUseStyles({
  header_main: {
    backgroundColor: CUSTOM_COLORS.MAIN_BLUE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${CUSTOM_COLORS.BLACK}`,
    height: '76px',
    padding: '0 120px',
    position: 'relative'
  },
  header_basket: {
    position: 'absolute',
    right: '120px',
    backgroundColor: CUSTOM_COLORS.HEADER_BLUE,
    border: `1px solid ${CUSTOM_COLORS.BLACK}`,
    padding: '24px',
    fontSize: '14px',
    color: CUSTOM_COLORS.WHITE,
    '& span': {
      marginRight: '8px'
    }
  }
});

function Header() {
  // Styles const
  const classes = useStyles();

  return (
    <div className={classes.header_main}>
      <div>
        <img src={Logo} alt="Grocery Market" width={142} height={41} />
      </div>
      <div className={classes.header_basket}>
        <span>
          <img src={Basket} alt="Basket" />
        </span>
        {getFormattedAmount(39.37)}
      </div>
    </div>
  );
}

export default Header;
