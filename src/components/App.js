import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import AddNew from "./AddNew";
import About from "./About";

function App() {
    return (
        <div>
            <h1>Page Title</h1>
            <NavBar />
                <Switch>
                    <Route exact path="/add">
                        <AddNew />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
      </div>
    );
  }

export default App;