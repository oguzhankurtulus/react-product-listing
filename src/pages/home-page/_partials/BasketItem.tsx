// Import JSS
import { createUseStyles } from 'react-jss';

// Import Antd
import { Row, Col, Divider } from 'antd';
import { ICON_LIST } from 'src/common/constants/icon/iconList';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import Utils
import { getFormattedAmount } from 'src/common/utils/amountUtil';

// Import Components
import Button from 'src/components/cta/button/Button';
import Icon from 'src/components/icon/Icon';

// Styles
const useStyles = createUseStyles({
  buttons: {
    border: 'none !important',
    boxShadow: 'none !important'
  },
  amount: {
    backgroundColor: CUSTOM_COLORS.MAIN_BLUE,
    textAlign: 'center',
    fontSize: '15px',
    color: CUSTOM_COLORS.WHITE,
    width: '30px',
    fontWeight: 'bold',
    padding: '4px 0'
  },
  price: {
    fontSize: '14px',
    fontWeight: 600,
    color: CUSTOM_COLORS.MAIN_BLUE
  },
  product: {
    color: CUSTOM_COLORS.BLACK_TEXT
  }
});

function BasketItem(props) {
  const { item } = props;
  // Styles const
  const classes = useStyles();

  return (
    <div>
      <Row align="middle">
        <Col span={16}>
          <Row>
            <Col span={24}>
              <span className={classes.product}>{item?.name}</span>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <span className={classes.price}>{getFormattedAmount(item?.price)}</span>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row align="middle" gutter={12} justify="end">
            <Button
              size="small"
              name="minus"
              type="ghost"
              icon={<Icon color={CUSTOM_COLORS.MAIN_BLUE} size="xs" icon={ICON_LIST.MINUS} />}
              className={classes.buttons}
            />

            <div className={classes.amount}>1</div>

            <Button
              size="small"
              name="minus"
              type="ghost"
              icon={<Icon color={CUSTOM_COLORS.MAIN_BLUE} size="xs" icon={ICON_LIST.PLUS} />}
              className={classes.buttons}
            />
          </Row>
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default BasketItem;
