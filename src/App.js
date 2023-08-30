import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <section className="container">
        <Route path="/" exact={true} component={Home} />
        <Route path="/movie-detail" component={Detail}/>
        <Route path="/about" component={About} />
        
      </section>
    </HashRouter>
  );
}

export default App;
