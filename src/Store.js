// store.js

import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./Reducer";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;