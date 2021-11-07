import * as types from '../types';
import { api } from '../api';

export const getManufacturer = () => (dispatch) => {
  dispatch(api('get', `manufacturer`, undefined, types.GET_MANUFACTURER));
};
