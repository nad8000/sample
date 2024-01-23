import actionTypes from "./actionTypes";
import { BlogInfo } from './types'

// todo: actionsとしてエクスポートしたい
export const init = (blogInfo: BlogInfo) => ({
  type: actionTypes.INITIALIZATION,
  payload: {blogInfo}
});

export const setVisibilityFilter = (filter: any) => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = (id: any) => ({
  type: actionTypes.TOGGLE_TODO,
  id
});

/* eslint-disable import/no-anonymous-default-export */
export default {
  init: init,
  setVisibilityFilter,
  toggleTodo
};