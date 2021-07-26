import { all } from "redux-saga/effects";
import novelsSaga from './novelsSaga';

export default function* rootSaga() {
  yield all([
    novelsSaga(),
  ]);
}