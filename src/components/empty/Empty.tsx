// Import Components
import { Empty as EmptyAntd } from 'antd';
import { EmptyProps as EmptyPropsAntd } from 'antd/lib/empty';

//Import Components
import TranslatedText from 'src/components/translated-text/TranslatedText';

export interface EmptyProps extends EmptyPropsAntd {
  description: string | undefined | any;
}

function Empty(props: EmptyProps) {
  const { children, description } = props;

  return (
    <EmptyAntd {...props} description={<TranslatedText label={description} />}>
      {children}
    </EmptyAntd>
  );
}

export default Empty;
