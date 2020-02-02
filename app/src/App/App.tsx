import * as React from "react";

import ProgrammerHumour from "./ProgrammerHumour";
import NavBar from "./NavBar";

import "/styles/main.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ProgrammerHumour />
    </div>
  );
}

export default App;
