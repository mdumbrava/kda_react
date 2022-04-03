import React, { useState } from "react";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Ahri from "./Ahri/Ahri";
import Akali from "./Akali/Akali";
import Evelynn from "./Evelynn/Evelynn";
import Kaisa from "./Kaisa/Kaisa";
import Seraphine from "./Seraphine/Seraphine";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [title, setTitle] = useState(null);
  // fetch API
  const callBackendAPI = async () => {
    // const response = await fetch("http://localhost:9000/api");
    let response = await fetch("/api");
    let body = await response.text();
    // console.log("Showing API:");
    const value = setTitle(body);
    console.log(body);
  };

  // console.log(callBackendAPI());
  callBackendAPI();

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
          {/* <Route path="*"                component={Error}    /> */}
        </Switch>
      </div>
    </Router>
  );
}

const Error = () => {
  return (
    <div>
      <div className="title">Error</div>
    </div>
  );
};

export default App;
