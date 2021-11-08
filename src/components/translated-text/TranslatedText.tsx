//Import Translation
import { translate } from 'src/common/utils/translateUtil';

// Import Utils
import { toLocaleLowercase, toLocaleUppercase, toLocaleCapitalize } from 'src/common/utils/stringUtil';

// Import Constants
import { TEXT_TRASFORM } from 'src/common/constants/text/textTransform';
import { STATUS } from 'src/common/constants/status/status';
import { TEXT_WEIGHT } from 'src/common/constants/text/textWeight';
import { FONT_SIZES } from 'src/common/constants/sizes/fontSizes';

// Interface
export interface TranslatedTextProps {
  label?: string;
  textTransform?: TEXT_TRASFORM;
  status?: STATUS | undefined;
  weight?: TEXT_WEIGHT | undefined;
  italic?: boolean;
  size?: FONT_SIZES | undefined;
  onClick?: () => void;
}

const TranslatedText = (props: TranslatedTextProps) => {
  const { label, textTransform, status, weight, italic, size, onClick } = props;
  let text = label || '';

  text =
    textTransform === TEXT_TRASFORM.UPPERCASE
      ? toLocaleUppercase(text)
      : textTransform === TEXT_TRASFORM.LOWERCASE
      ? toLocaleLowercase(text)
      : textTransform === TEXT_TRASFORM.CAPITALIZE
      ? toLocaleCapitalize(text)
      : text;

  return (
    <span className={`text-${status} font-${weight} ${size && size} ${italic && 'font-italic'}`} onClick={onClick}>
      {translate(text)}
    </span>
  );
};

TranslatedText.defaultProps = {
  status: STATUS.DEFAULT,
  weight: 'regular',
  italic: false
};

export default TranslatedText;
