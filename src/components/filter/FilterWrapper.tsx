// Import React
import { ReactElement } from 'react';

// Import Components
import Box from 'src/components/box/Box';

interface FilterWrapperProps {
  children: ReactElement;
  title?: string;
}

function FilterWrapper(props: FilterWrapperProps) {
  // Desctruct Props
  const { children, title } = props;

  return (
    <Box title={title}>
      <div className="filterWrapper">{children}</div>
    </Box>
  );
}

export default FilterWrapper;
