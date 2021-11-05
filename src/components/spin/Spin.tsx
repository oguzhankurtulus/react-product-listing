// Import React
import React from 'react';

// Import Components
import { Spin as SpinAntd } from 'antd';
import { SpinProps as SpinPropsAntd } from 'antd/lib/spin';

//Import Translation
import { translate } from 'src/common/utils/translateUtil';

export interface SpinProps extends SpinPropsAntd {
  title?: string;
  children?: React.ReactElement;
}

function Spin(props: SpinProps) {
  // Desctruct Props
  const { children, title } = props;

  return (
    <SpinAntd {...props} tip={title && translate(title)}>
      {children}
    </SpinAntd>
  );
}

export default Spin;
