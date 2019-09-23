import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
    <NavigationBar/>
    <Home {...props}/>
    </Router>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));