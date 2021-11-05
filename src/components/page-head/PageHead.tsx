// Import React
import { Helmet } from 'react-helmet';

// Import Utils
import { getPageTitle } from 'src/common/utils/getPageTitle';
import { translate } from 'src/common/utils/translateUtil';
import { toLocaleCapitalize } from 'src/common/utils/stringUtil';

function PageHead() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {toLocaleCapitalize(translate(getPageTitle()))} | {translate('PAGE_TITLES.GROCERY')}
      </title>
      <meta name="description" content="Grocery Shop Listing Platform" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
}

export default PageHead;
