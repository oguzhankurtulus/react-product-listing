import * as types from '../types';
import { api } from '../api';

export const getItems = (variables?) => (dispatch) => {
  const params = {
    _page: variables?.page,
    _limit: 16
  };

  dispatch(api('get', `items`, params, types.GET_ITEMS));
};
