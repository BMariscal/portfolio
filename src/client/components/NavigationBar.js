import React from "react";
import FetchAllBlogEntries from "./blog/FetchAllBlogEntries";
import Projects from "./Projects";
import FetchEntryContent from "./blog/FetchEntryContent";
import Main from "./Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav
  } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar className="sticky-top" bg="light" expand="lg">
          <Navbar.Brand href="/">
            <LinkContainer to="/">
              <a class="navbar-brand" href="/" className="name-title">
                <img src="https://i.imgur.com/bPuyQ23.jpg" alt="me"></img>
                Briceida Mariscal
              </a>
            </LinkContainer>
          </Navbar.Brand>
            <Nav className="mr-auto" id="bg">
              <LinkContainer to="/blog">
                <Nav.Link className="blog-title" href="#blog"> Blog </Nav.Link>
              </LinkContainer>
            </Nav>
        </Navbar>
        <Route path="/" exact component={Main} />
        <Route path="/blog" exact component={FetchAllBlogEntries} />
        <Route path="/post" component={FetchEntryContent} />
      </Router>
    );
  }
}

export default NavigationBar;
