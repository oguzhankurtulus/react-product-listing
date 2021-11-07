// Import React
import { ReactElement } from 'react';

// Import JSS
import { createUseStyles } from 'react-jss';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

// Import Components
import Header from './header/Header';

// Interface
export interface DefaultLayoutProps {
  children: ReactElement | JSX.Element;
}

// Styles
const useStyles = createUseStyles({
  default_layout: {
    backgroundColor: CUSTOM_COLORS.MAIN_BACKGROUND,
    minHeight: '100vh'
  },
  component_container: {
    padding: '38px 120px 0'
  }
});

function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;
  // Styles const
  const classes = useStyles();

  return (
    <div className={classes.default_layout}>
      <Header />
      <div className={classes.component_container}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
