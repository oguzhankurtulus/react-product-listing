import { STORE_CONFIG } from '../storeConfig';

const initialStateFunc = () => {
  const initialState = {};
  const storeConfig = Object.values(STORE_CONFIG);

  for (let i = 0; i < storeConfig?.length; i++) {
    const serviceName = storeConfig?.[i]?.serviceName!.toString();
    initialState[serviceName] = {
      isLoading: false,
      success: null,
      failed: null
    };
  }

  return initialState;
};

const initialState = initialStateFunc();

export default function globalReducer(state: any = initialState, action) {
  const targetState: string = STORE_CONFIG[action.requestName]?.serviceName!.toString();

  switch (action.type) {
    case `${action.requestName}_LOADING`:
      return {
        ...state,
        [targetState]: {
          ...state[targetState],
          isLoading: true
        }
      };
    case `${action.requestName}_SUCCESS`:
      return {
        ...state,
        [targetState]: {
          isLoading: false,
          success: action.payload,
          failed: null
        }
      };
    case `${action.requestName}_FAIL`:
      return {
        ...state,
        [targetState]: {
          isLoading: false,
          success: null,
          failed: action.payload
        }
      };
    default:
      return state;
  }
}
