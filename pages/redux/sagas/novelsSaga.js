import { call, put, takeEvery } from "redux-saga/effects";
import { addNovels, deleteNovels, getNovels, updateNovels } from "../api/service";
import * as actions from '../types'
import { responseError, responseSuccess } from "../../../utils/responseSelector";

export function* getNovelsSaga(action) {
  try {
    const data = yield call(getNovels);
    yield put({
      type: actions.GET_NOVELS_SUCCESS,
      payload: responseSuccess(action, data)
    })

  } catch (error) {
    yield put({
      type: actions.GET_NOVELS_ERROR,
      payload: responseError(action, error)
    })
  }
}

export function* addNovelsSaga(action) {
  try {
    const data = yield call(addNovels, action.payload.params);
    yield put({
      type: actions.POST_NOVELS_SUCCESS,
      payload: responseSuccess(action, data)
    })

  } catch (error) {
    yield put({
      type: actions.POST_NOVELS_ERROR,
      payload: responseError(action, error)
    })
  }
}

export function* updateNovelsSaga(action) {
  try {
    const data = yield call(updateNovels, action.payload.params);
    yield put({
      type: actions.UPDATE_NOVELS_SUCCESS,
      payload: responseSuccess(action, data)
    })

  } catch (error) {
    yield put({
      type: actions.UPDATE_NOVELS_ERROR,
      payload: responseError(action, error)
    })
  }
}

export function* deleteNovesSaga(action) {
  try {
    const data = yield call(deleteNovels, action.payload.params);
    yield put({
      type: actions.DELETE_NOVELS_SUCCESS,
      payload: responseSuccess(action, data)
    })

  } catch (error) {
    yield put({
      type: actions.DELETE_NOVELS_ERROR,
      payload: responseError(action, error)
    })
  }
}

export default function* novelsSaga() {
  yield takeEvery(actions.GET_NOVELS, getNovelsSaga)
  yield takeEvery(actions.POST_NOVELS, addNovelsSaga)
  yield takeEvery(actions.UPDATE_NOVELS, updateNovelsSaga)
  yield takeEvery(actions.DELETE_NOVELS, deleteNovesSaga)
}