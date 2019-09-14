import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Render, Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";


const localStorage = window.localStorage;

class BlogEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ID = this.props.item.id;
    const title = this.props.item.title;
    const summary = this.props.item.summary;
    const url = "/post";

    const params = {
      pathname: url,
      param1: ID,
      param2: title
    };


    return (
        <div id="post">
          <Link to={params}>
            <h2> {title}</h2>
            <h6>{summary} </h6>
          </Link>
        </div>
    );
  }
}

export default BlogEntry;
