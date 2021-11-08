// Import React
import { ReactNode, Fragment } from 'react';

// Import Antd
import { Button as ButtonAntd } from 'antd';
import { ButtonProps as ButtonPropsAntd } from 'antd/lib/button';

// Import Constants
import { STATUS } from 'src/common/constants/status/status';
import { MARGIN_SIZES } from 'src/common/constants/sizes/marginSizes';

//Import Components
import TranslatedText from 'src/components/translated-text/TranslatedText';
import FormItem from 'src/components/form-elements/form-item/FormItem';

export interface ButtonProps extends ButtonPropsAntd {
  status?: STATUS | undefined;
  label?: string | undefined;
  icon?: ReactNode;
  className?: string | undefined;
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
            ? `btn-${status} ${className}  
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

  return <Fragment>{isform ? <FormItem name={name}>{buttonTemplate}</FormItem> : buttonTemplate}</Fragment>;
}

Button.defaultProps = {
  block: false
};

export default Button;
