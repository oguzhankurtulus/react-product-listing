// Import Antd
import { Checkbox as CheckboxAntd } from 'antd';
import FormItem, { FormItemProps } from 'src/components/form-elements/form-item/FormItem';
import { CheckboxGroupProps as CheckboxGroupPropsAntd } from 'antd/lib/checkbox';

type MergedProps = CheckboxGroupPropsAntd & Omit<FormItemProps, 'children'>;

// Import Child Components
const CheckboxGroupAntd = CheckboxAntd.Group;

function CheckboxGoup(props: MergedProps) {
  return (
    <FormItem {...props}>
      <CheckboxGroupAntd {...props} />
    </FormItem>
  );
}

export default CheckboxGoup;
