//Import React
import { ReactElement, Fragment } from 'react';

// TODO
// import 'src/assets/styles/_box.scss';

//Import Components
import BoxTitle from 'src/components/title/box-title/BoxTitle';

export interface BoxProps {
  title?: string;
  children: ReactElement | JSX.Element;
  marginReset?: boolean | undefined;
}

function Box(props: BoxProps) {
  // Desctruct Props
  const { title, children, marginReset } = props;

  return (
    <Fragment>
      {title && <div className="box-header">{title && <BoxTitle title={title} />}</div>}
      <div className={marginReset ? 'no_margin_bottom box' : 'box'}>
        <div className="box-container">{children}</div>
      </div>
    </Fragment>
  );
}

export default Box;
