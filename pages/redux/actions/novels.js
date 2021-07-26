import * as type from '../types';

export function getNovels(payload) {
  return {
    type: type.GET_NOVELS,
    payload
  }
}

export function addNovels(payload) {
  return {
    type: type.POST_NOVELS,
    payload
  }
}

export function updateNovels(payload) {
  return {
    type: type.UPDATE_NOVELS,
    payload
  }
}

export function deleteNovels(payload) {
  return {
    type: type.DELETE_NOVELS,
    payload
  }
}