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


const  NavigationBar  = ()=> {
    return (
        <Navbar className="sticky-top card2" bg="light" expand="lg">
          <Navbar.Brand href="/">
            <LinkContainer to="/">
              <a className="navbar-brand card" href="/" className="name-title">
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
    );
}

export default NavigationBar;
