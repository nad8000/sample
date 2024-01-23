import CONSTANTS from "./constants";

const getVisibleTodos = (todos: any[], filter: string) => {
  switch (filter) {
    case CONSTANTS.SHOW_ALL:
      return todos;
    case CONSTANTS.SHOW_COMPLETED:
      return todos.filter((t: { completed: any; }) => t.completed);
    case CONSTANTS.SHOW_ACTIVE:
      return todos.filter((t: { completed: any; }) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

/* eslint-disable import/no-anonymous-default-export */
export default {
  getVisibleTodos
};