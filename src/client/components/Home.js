import React from "react";
import ReactDOM from "react-dom";
import FetchAllBlogEntries from "./blog/FetchAllBlogEntries";
import FetchEntryContent from "./blog/FetchEntryContent";
import Main from "./Main";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const Home = (props) => {
  return (
     <Switch>
    <Route exact path="/"  render={(props) => (<Main {...props} routes={Main.routes} /> )} />
    <Route path="/blog" render={(props) => (<FetchAllBlogEntries {...props} routes={FetchAllBlogEntries.routes} /> )} />
    <Route path="/:id"  render={(props) => (<FetchEntryContent {...props} routes={FetchEntryContent.routes} /> )}/>
    </Switch>
  );
};
export default Home;