import * as types from '../types';
import { SERVICES } from '../../constants/serviceConstants';
import { api } from '../api';

export const getItems = () => (dispatch) => {
  dispatch(api('get', SERVICES.REACT_APP_API, `getItems`, undefined, types.GET_ITEMS));
};
