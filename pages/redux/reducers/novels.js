import * as type from '../types';

const initialState = {
  addNovels: {},
  deleteNovels: {},
  error: null,
  loading: false,
  novels: {},
  updateNovels: {},
}

export default function novelsReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_NOVELS:
      return {
        ...state,
        loading: true
      }
    case type.GET_NOVELS_SUCCESS:
      return {
        ...state,
        novels: action.payload,
        loading: false,
      }
    case type.GET_NOVELS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.POST_NOVELS:
      return {
        ...state,
        loading: true
      }
    case type.POST_NOVELS_SUCCESS:
      return {
        ...state,
        addNovels: action.payload,
        loading: false,
      }
    case type.POST_NOVELS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.UPDATE_NOVELS:
      return {
        ...state,
        loading: true
      }
    case type.UPDATE_NOVELS_SUCCESS:
      return {
        ...state,
        updateNovels: action.payload,
        loading: false,
      }
    case type.UPDATE_NOVELS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.DELETE_NOVELS:
      return {
        ...state,
        loading: true
      }
    case type.DELETE_NOVELS_SUCCESS:
      return {
        ...state,
        deleteNovels: action.payload,
        loading: false,
      }
    case type.DELETE_NOVELS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default: {
      return state;
    }
  }
}