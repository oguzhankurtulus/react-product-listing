// Import JSS
import { createUseStyles } from 'react-jss';

// Import Antd
import { Radio } from 'antd';
import { RadioGroupProps } from 'antd/lib/radio';

// Import Components
import FormItem, { FormItemProps } from 'src/components/form-elements/form-item/FormItem';

type MergedProps = Omit<RadioGroupProps, 'options'> & Omit<FormItemProps, 'children'>;

export interface RadioProps extends MergedProps {
  options: string[] | Array<{ label: string; value: string; disabled?: boolean }>;
  direction?: 'vertical' | 'horizontal';
}

const useStyles = createUseStyles({
  radio_group_vertical: {
    display: 'flex',
    flexDirection: 'column'
  },
  radio_group_horizontal: {
    display: 'inline-block'
  }
});

function RadioGroup(props: RadioProps) {
  const { options, direction } = props;

  const classes = useStyles();

  return (
    <FormItem {...props}>
      <Radio.Group {...props} className={direction && classes[`radio_group_${direction}`]}>
        {options?.map((item, index) => (
          <Radio key={index} value={item?.value}>
            {item?.label}
          </Radio>
        ))}
      </Radio.Group>
    </FormItem>
  );
}

RadioGroup.defaultProps = {
  direction: 'horizontal'
};

export default RadioGroup;
