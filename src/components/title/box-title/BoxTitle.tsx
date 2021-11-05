// Import Constants
import { TEXT_TRASFORM } from 'src/common/constants/text/textTransform';

// Import Components
import TranslatedText from 'src/components/translated-text/TranslatedText';

export interface BoxTitleProps {
  title: string;
  textTransform?: TEXT_TRASFORM;
  className?: string;
}

function BoxTitle(props: BoxTitleProps) {
  const { title, textTransform, className } = props;

  return (
    <div className={`box-title ${className}`}>
      <div className={`title`}>
        <TranslatedText label={title} textTransform={textTransform} />
      </div>
    </div>
  );
}

export default BoxTitle;
