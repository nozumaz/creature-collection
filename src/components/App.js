import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";


function App() {

    return (
        <div>
        <header>
            <h1>test</h1>
            <NavBar />
        </header>
        <body>
          <p>body test</p>
        </body>
      </div>
    );
  }

export default App;