// Import Antd
import { Radio } from 'antd';
import { RadioGroupProps } from 'antd/lib/radio';

// Import Components
import FormItem, { FormItemProps } from 'src/components/form-elements/form-item/FormItem';

type MergedProps = RadioGroupProps & Omit<FormItemProps, 'children'>;

function RadioGroup(props: MergedProps) {
  return (
    <FormItem {...props}>
      <Radio.Group {...props} />
    </FormItem>
  );
}

export default RadioGroup;
