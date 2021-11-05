// Import Antd
import { Form } from 'antd';
import { FormItemProps as FormItemPropsAntd, Rule } from 'antd/lib/form';

//Import Components
import TranslatedText from 'src/components/translated-text/TranslatedText';

// Import Utils
import { translate } from 'src/common/utils/translateUtil';

// TODO
// import 'src/assets/styles/_form.scss';

export interface FormItemProps extends FormItemPropsAntd {
  name: string | number | (string | number)[] | undefined;
  label?: string | null;
  rules?: Rule[] | Record<string, unknown>[] | any;
  notForm?: boolean;
  marginReset?: boolean;
}

function FormItem(props: FormItemProps) {
  // Destruct Props
  const { children, label, notForm, className, marginReset, rules } = props;

  const customRule: Record<string, unknown>[] = [];

  rules &&
    rules?.map((item) => {
      customRule?.push({
        ...item,
        message: translate(item?.message)
      });
    });

  return (
    <div className="custom-form-item">
      {notForm ? (
        <div>{children}</div>
      ) : (
        <Form.Item
          {...props}
          label={label && <TranslatedText label={label} />}
          className={`${className} ${marginReset && 'no_margin'}`}
          rules={customRule}
        >
          {children}
        </Form.Item>
      )}
    </div>
  );
}

export default FormItem;
