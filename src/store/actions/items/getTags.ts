import * as types from '../types';
import { api } from '../api';

export const getTags = () => (dispatch) => {
  dispatch(api('get', `tags`, undefined, types.GET_TAGS));
};
