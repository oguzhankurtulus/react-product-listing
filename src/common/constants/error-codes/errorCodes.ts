import { translate } from 'src/common/utils/translateUtil';

export const ERROR_CODES = [
  {
    code: 'SUCCESS',
    title: translate('GLOBAL.NOTIFICATION_CODES.SUCCESS'),
    description: null,
    status: 'success'
  },
  {
    code: 'ERROR',
    title: translate('GLOBAL.NOTIFICATION_CODES.ERROR'),
    description: null,
    status: 'error'
  }
];
