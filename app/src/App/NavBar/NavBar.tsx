import * as React from "react";

import icon from "./icon.png";

function NavBar() {
  return (
    <div className="navbar">
      <img className="icon" src={icon} alt="icon" />
      <h2 className="title">r/ProgrammerHumour</h2>
    </div>
  );
}

export default NavBar;
