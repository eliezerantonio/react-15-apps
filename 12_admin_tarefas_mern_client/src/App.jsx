import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects"; 

import ProjectState from "./context/projects/projectState";

const App = () => {
  return (
    <ProjectState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/new-account" element={<NewAccount />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </ProjectState>
  );
};

export default App;
