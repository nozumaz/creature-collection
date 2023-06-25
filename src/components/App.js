import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import AddNew from "./AddNew";

function App() {
    return (
        <div>
            <h1>Page Title</h1>
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/add">
                        <AddNew />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
      </div>
    );
  }

export default App;