import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));