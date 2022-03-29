import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAR_TASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasksproject: [action.payload, ...state.tasksproject],
        errortask: false,
      };

    case VALIDATE_TASK:
      return { ...state, errortask: true };

    case DELETE_TASK:
      return {
        ...state,
        tasksproject: state.tasksproject.filter((task) => task._id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasksproject: state.tasksproject.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };

    case ACTUAL_TASK:
      return {
        ...state,
        taskselected: action.payload,
      };
    case CLEAR_TASK:
      return {
        ...state,
        taskselected: null,
      };
    default:
      return state;
  }
};
