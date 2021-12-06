import React from "react";
import NewProject from "../projects/NewProject";
const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN <span>TASKS</span>
      </h1>
      <NewProject />
      <div className="proyectos">
        <h2>Seus Projectos</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
