import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errortask: false,
      };

    case VALIDATE_TASK:
      return { ...state, errortask: true };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case STATE_TASK:
      return {
        ...state,
        tasks: state.tasksproject.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case ACTUAL_TASK:
      return {
        ...state,
        taskselected: action.payload,
      };
    default:
      return state;
  }
};
