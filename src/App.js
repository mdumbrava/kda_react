import React from "react";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Ahri from "./Ahri/Ahri";
import Akali from "./Akali/Akali";
import Evelynn from "./Evelynn/Evelynn";
import Kaisa from "./Kaisa/Kaisa";
import Seraphine from "./Seraphine/Seraphine";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ahri" component={Ahri} />
          <Route path="/akali" component={Akali} />
          <Route path="/evelynn" component={Evelynn} />
          <Route path="/kaisa" component={Kaisa} />
          <Route path="/seraphine" component={Seraphine} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
