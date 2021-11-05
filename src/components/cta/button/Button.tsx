// Import React
import { ReactNode } from 'react';

// Import Antd
import { Button as ButtonAntd } from 'antd';
import { ButtonProps as ButtonPropsAntd } from 'antd/lib/button';

// Import Constants
import { BUTTON_SIZES } from 'src/common/constants/sizes/buttonSizes';
import { STATUS } from 'src/common/constants/status/status';
import { MARGIN_SIZES } from 'src/common/constants/sizes/marginSizes';

//Import Components
import TranslatedText from 'src/components/translated-text/TranslatedText';
import FormItem from 'src/components/form-elements/form-item/FormItem';

// TODO
// import 'src/assets/styles/buttons.scss';

export interface ButtonProps extends Omit<ButtonPropsAntd, 'size'> {
  status?: STATUS | undefined;
  label?: string | undefined;
  icon?: ReactNode;
  className?: string | undefined;
  sizes?: BUTTON_SIZES | undefined;
  block?: boolean;
  marginright?: MARGIN_SIZES;
  marginleft?: MARGIN_SIZES;
  margintop?: MARGIN_SIZES;
  marginbottom?: MARGIN_SIZES;
  isform?: boolean;
  name: string;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  // Desctruct Props
  const {
    label,
    status,
    icon,
    className = '',
    sizes,
    block,
    marginright,
    marginleft,
    margintop,
    marginbottom,
    isform,
    name,
    disabled
  } = props;

  const buttonTemplate = (
    <div className={block ? `full-wrap` : 'inline-wrap'}>
      <ButtonAntd
        {...props}
        disabled={disabled}
        id={name}
        className={
          status
            ? `btn-${status} ${className} ${sizes} 
          margin_right_${marginright} margin_left_${marginleft} margin_top_${margintop} margin_bottom_${marginbottom}`
            : `${className} 
          margin_right_${marginright} margin_left_${marginleft} margin_top_${margintop} margin_bottom_${marginbottom}`
        }
        icon={icon && <span className={`btn-icon ${label && 'margin_right_5'}`}>{icon}</span>}
      >
        {label ? <TranslatedText label={label} /> : ''}
      </ButtonAntd>
    </div>
  );

  return <>{isform ? <FormItem name={name}>{buttonTemplate}</FormItem> : buttonTemplate}</>;
}

Button.defaultProps = {
  block: false,
  sizes: BUTTON_SIZES.MD
};

export default Button;
