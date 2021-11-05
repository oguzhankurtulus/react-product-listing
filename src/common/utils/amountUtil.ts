// Import Constants
import {
  locale,
  defaultSymbol,
  thousandSeperator,
  decimalSeperator
} from 'src/common/constants/amount/amountConstants';

// GET BACKEND FORMATS
export const getFormattedAmount = (amount, currencySymbol?, digit?) => {
  const formattedOutput = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: digit ? digit : 2
  });

  return amount === null
    ? '-'
    : formattedOutput?.format(amount || 0).replace(defaultSymbol, currencySymbol ? currencySymbol : defaultSymbol);
};

// NONSYMBOL FORMAT
export const formatAmountToNonSymbol = (amount) =>
  amount?.split(thousandSeperator)?.join('')?.replace(decimalSeperator, thousandSeperator)?.replace('₺', '');
