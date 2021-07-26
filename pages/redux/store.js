import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { sagaMiddlewareWithCallback } from "./sagas/customMiddleware";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, sagaMiddlewareWithCallback)
);

sagaMiddleware.run(rootSaga)

export default store;