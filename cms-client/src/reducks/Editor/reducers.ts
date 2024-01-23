import { combineReducers } from "redux";
import CONSTANTS from "./constants";
import actionTypes from "./actionTypes";
/* State shape
state: {
  todos: [],
  visibilityFilter: SHOW_ALL
}
*/

// this method can be confusing because it serves two purposes:
// 1 - it create a new todo
// 2 - it toggles the completed state of an existing todo
const todo = (state: any, action:any) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case actionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action:any) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, todo(undefined, action)];
    case actionTypes.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = CONSTANTS.SHOW_ALL, action:any) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  todos,
  visibilityFilter
});

export default todosReducer;