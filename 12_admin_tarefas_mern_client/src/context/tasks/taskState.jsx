import React from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

const TaskState = (props) => {
  const initialState = {
    tasks: [],
  };

  // criar dispatch e estados

  const [state, dispatch] = React.useReducer(TaskReducer, initialState);

  return <TaskContext.Provider>{props.children}</TaskContext.Provider>;
};
export default TaskState;
