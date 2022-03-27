import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";

import ProjectState from "./context/projects/projectState";
import TaskState from "./context/tasks/taskState";
import AlertState from "./context/alerts/alertState";

import AuthState from "./context/auth/authState";
import tokenAuth from "./config/token";

//revisar tokenAuth
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

const App = (props) => {
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/new-account" element={<NewAccount />} />
                <Route exact path="/projects" element={<Projects />} />
              </Routes>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
};

export default App;
