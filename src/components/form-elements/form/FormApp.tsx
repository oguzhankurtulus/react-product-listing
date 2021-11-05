// Import React
import { ReactElement } from 'react';

// Import Antd
import { Form as FormAntd } from 'antd';
import { FormProps as FormPropsAntd } from 'antd/lib/form';

// Import Constants
import { FORM_LAYOUT } from 'src/common/constants/form/formLayout';

export interface FormProps extends FormPropsAntd {
  children: ReactElement;
  name: string;
  layout?: FORM_LAYOUT;
}

function FormApp(props: FormProps) {
  // Desctruct props
  const { children } = props;

  return <FormAntd {...props}>{children}</FormAntd>;
}

FormApp.defaultProps = {
  layout: FORM_LAYOUT.VERTICAL
};

export default FormApp;
