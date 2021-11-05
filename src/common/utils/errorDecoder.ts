// Import Constants
import { ERROR_CODES } from 'src/common/constants/error-codes/errorCodes';

// Import Antd
import { notification } from 'antd';

// For Backend Response Codes
export const errorDecoder = (errorCode) => {
  let decodedObj = {};

  ERROR_CODES?.map((errorObj) => errorObj?.code === errorCode && (decodedObj = errorObj));

  return decodedObj;
};

export const errorDecoderPushNotification = (errorCode, key: string) => {
  const isAvailable = ERROR_CODES?.filter((x) => x?.code === errorCode);
  const decodedObj: any = errorDecoder(isAvailable?.length > 0 ? errorCode : 'ERROR');

  notification.error({
    message: decodedObj?.title,
    description: decodedObj?.description,
    placement: 'bottomLeft',
    key,
    duration: 5
  });
};

export const successDecoderPushNotification = (successCode, key: string) => {
  const isAvailable = ERROR_CODES?.filter((x) => x?.code === successCode);
  const decodedObj: any = errorDecoder(isAvailable?.length > 0 ? successCode : 'SUCCESS');

  notification.success({
    message: decodedObj?.title,
    description: decodedObj?.description,
    placement: 'bottomLeft',
    key,
    duration: 5
  });
};
