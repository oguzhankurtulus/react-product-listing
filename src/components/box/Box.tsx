//Import React
import { ReactElement, Fragment } from 'react';

// Import JSS
import { createUseStyles, useTheme } from 'react-jss';

// Import Constants
import { CUSTOM_COLORS } from 'src/common/constants/colors/customColors';

//Import Components
import BoxTitle from 'src/components/title/box-title/BoxTitle';

type RuleNames = 'box_header' | 'box_container';
export interface BoxProps {
  title?: string;
  children: ReactElement | JSX.Element;
  titleSize?: string;
  titleWeight?: number;
  titleColor?: string;
}

interface CustomTheme {
  background: string;
}

// Styles
const useStyles = createUseStyles<RuleNames, BoxProps, CustomTheme>({
  box_header: ({ theme, ...props }) => ({
    fontSize: props.titleSize || '13px',
    fontWeight: props.titleWeight || 600,
    color: props.titleColor || CUSTOM_COLORS.SECONDARY_TEXT
  }),

  box_container: {
    backgroundColor: CUSTOM_COLORS.WHITE,
    padding: '20px',
    margin: '12px 0 24px',
    boxShadow: '0px 6px 24px rgba(93, 62, 188, 0.04)',
    borderRadius: '2px'
  }
});

function Box(props: BoxProps) {
  // Desctruct Props
  const { title, children } = props;

  // Styles const
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  return (
    <Fragment>
      {title && <div className={classes.box_header}>{title && <BoxTitle title={title} />}</div>}
      <div>
        <div className={classes.box_container}>{children}</div>
      </div>
    </Fragment>
  );
}

export default Box;
