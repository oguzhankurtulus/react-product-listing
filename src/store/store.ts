import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

const reducer = combineReducers(Reducers);

const devTools =
  window && (window as any).__REDUX_DEVTOOLS_EXTENSION__
    ? window && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);
const store = createStore(reducer, enhancer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
