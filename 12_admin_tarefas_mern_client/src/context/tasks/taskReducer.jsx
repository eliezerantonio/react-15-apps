import { TASKS_PROJECT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    default:
      return state;
  }
};
