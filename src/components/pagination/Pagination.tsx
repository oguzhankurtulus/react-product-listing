// Import Constants
import { PAGINATION_SIZES } from 'src/common/constants/pagination/paginationSizes';

// Import Components
import { Pagination as PaginationAntd } from 'antd';
import { PaginationProps as PaginationPropsAntd } from 'antd/lib/pagination';

export interface PaginationProps extends Omit<PaginationPropsAntd, 'size'> {
  size?: PAGINATION_SIZES | undefined;
}

function Pagination(props: PaginationProps) {
  return <PaginationAntd {...props} />;
}

Pagination.defaultProps = {
  size: PAGINATION_SIZES.SMALL
};

export default Pagination;
