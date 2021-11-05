// Import React
import { ReactElement } from 'react';

// Import Antd
import { Checkbox as CheckboxAntd } from 'antd';
import { CheckboxProps as CheckboxPropsAntd } from 'antd/lib/checkbox';

// Import Components
import TranslatedText from 'src/components/translated-text/TranslatedText';
import FormItem, { FormItemProps } from 'src/components/form-elements/form-item/FormItem';

type MergedProps = CheckboxPropsAntd & Omit<FormItemProps, 'children'>;

export interface CheckboxProps extends MergedProps {
  value?: string | number | unknown;
  text: string | ReactElement;
  required?: boolean;
}

function Checkbox(props: CheckboxProps) {
  // Desctruct Props
  const { text, required } = props;

  return (
    <FormItem {...props}>
      <CheckboxAntd {...props} onChange={() => null}>
        {required && <span className="text-danger mr5">*</span>}
        {typeof text === 'string' ? <TranslatedText label={text} /> : text}
      </CheckboxAntd>
    </FormItem>
  );
}

export default Checkbox;
