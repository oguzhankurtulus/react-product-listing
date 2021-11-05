// Import Constants
import { STATUS } from 'src/common/constants/status/status';

// Import Assets
import notFoundImage from 'src/assets/img/err_404.svg';

// Import Components
import Button from '../../../components/cta/button/Button';
import TranslatedText from '../../../components/translated-text/TranslatedText';

function NotFound() {
  return (
    <div className="errorPageWrapper">
      <img src={notFoundImage} alt="404 Page Not Found" />
      <p className="margin_bottom_10">
        <TranslatedText label="GLOBAL.PAGES.NOT_FOUND.DESCRIPTION" />
      </p>

      <Button href="/" name="back_to_home_cta" status={STATUS.PRIMARY} label="GLOBAL.FORM_ELEMENTS.CTA.BACK_TO_HOME" />
    </div>
  );
}

export default NotFound;
