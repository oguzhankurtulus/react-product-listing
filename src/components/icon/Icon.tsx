// Import FontAwesome
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

// Import Constants
import { ICON_STATUS } from 'src/common/constants/icon/iconStatus';
import { MARGIN_SIZES } from 'src/common/constants/sizes/marginSizes';

interface IconProps extends FontAwesomeIconProps {
  status?: ICON_STATUS;
  marginright?: MARGIN_SIZES;
  marginleft?: MARGIN_SIZES;
  margintop?: MARGIN_SIZES;
  marginbottom?: MARGIN_SIZES;
}
function Icon(props: IconProps) {
  // Desctruct Props
  const { status, marginright, marginleft, margintop, marginbottom } = props;

  return (
    <FontAwesomeIcon
      {...props}
      color={status}
      // eslint-disable-next-line max-len
      className={`margin_right_${marginright} margin_left_${marginleft} margin_top_${margintop} margin_bottom_${marginbottom}`}
    />
  );
}

Icon.defaultProps = {
  status: ICON_STATUS.SECONDARY,
  marginright: 0,
  marginleft: 0,
  margintop: 0,
  marginbottom: 0
};

export default Icon;
