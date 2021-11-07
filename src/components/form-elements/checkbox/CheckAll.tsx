// Import React
import { useState } from 'react';

// Import JSS
import { createUseStyles } from 'react-jss';

// Import Antd
import { Checkbox as CheckboxAntd } from 'antd';
import FormItem, { FormItemProps } from 'src/components/form-elements/form-item/FormItem';
import { CheckboxGroupProps as CheckboxGroupPropsAntd } from 'antd/lib/checkbox';

type MergedProps = Omit<CheckboxGroupPropsAntd, 'options'> & Omit<FormItemProps, 'children'>;

export interface CheckBoxGroupProps extends MergedProps {
  options: string[];
  direction?: 'vertical' | 'horizontal';
  handleChange?;
}

const useStyles = createUseStyles({
  check_group_vertical: {
    display: 'flex',
    flexDirection: 'column'
  },
  check_group_horizontal: {
    display: 'inline-block'
  }
});

// Import Child Components
const CheckboxGroupAntd = CheckboxAntd.Group;

function CheckAll(props: CheckBoxGroupProps) {
  const { options, direction, handleChange } = props;

  const classes = useStyles();

  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < options?.length);
    setCheckAll(list.length === options?.length);
    handleChange(list);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? options : []);
    handleChange(e.target.checked ? options : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <FormItem {...props}>
      <CheckboxAntd indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        All
      </CheckboxAntd>
      <CheckboxGroupAntd
        className={direction && classes[`check_group_${direction}`]}
        {...props}
        onChange={onChange}
        value={checkedList}
      >
        {options?.map((item, index) => (
          <CheckboxAntd value={item} key={index}>
            {item}
          </CheckboxAntd>
        ))}
      </CheckboxGroupAntd>
    </FormItem>
  );
}

CheckAll.defaultProps = {
  direction: 'vertical'
};

export default CheckAll;
