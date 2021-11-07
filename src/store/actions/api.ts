import { baseApi } from './baseApi';
import { STORE_CONFIG } from '../storeConfig';
import { errorDecoderPushNotification, successDecoderPushNotification } from '../../common/utils/errorDecoder';

export const api = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  params: Record<string, unknown> | string | FormData | undefined,
  requestName: string,
  triggerActions?: Array<void | ((dispatch: any) => void) | Record<string, unknown>> | undefined
) => (dispatch) => {
  dispatch({ type: `${requestName}_LOADING`, requestName });

  // Notification Mapping
  const notificationStatusObject: Record<string, boolean | string> = STORE_CONFIG?.[requestName];

  baseApi({
    method,
    url: `${url}`,
    data: method === 'get' ? undefined : params,
    params: method === 'get' ? params : undefined
  })
    .then((res) => {
      dispatch({
        type: `${requestName}_SUCCESS`,
        payload: res,
        requestName
      });
    })
    .then(() => {
      if (triggerActions) {
        for (let i = 0; i < triggerActions.length; i++) {
          dispatch(triggerActions[i]);
        }
      }
      if (notificationStatusObject?.successMessage) {
        successDecoderPushNotification('SUCCESS', `${requestName}_SUCCESS`);
      }
    })
    .catch((err) => {
      dispatch({
        type: `${requestName}_FAIL`,
        payload: err,
        requestName
      });
      if (notificationStatusObject?.errorMessage) {
        const errorKey = `${requestName}_FAIL`;
        errorDecoderPushNotification('ERROR', errorKey);
      }
    });
};
