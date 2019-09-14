import React from "react";
import MarkdownPost from "./MarkdownPost";
import { Fetch } from "react-request";

const localStorage = window.localStorage;

class FetchEntryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let ID = this.props.location.param1
    ID = ID? ID : localStorage.getItem("id");

    const url = "https://localhost:5000/entry/" + ID;
    localStorage.removeItem('id');
    localStorage.setItem('id', ID);
    return (
      <Fetch url={url}>
        {({ fetching, failed, data }) => {
          if (fetching) {
            return( <div class="d-flex justify-content-center">
                   <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                        </div> </div>)
            }

          if (failed) {
            return <div>The request did not succeed.</div>;
          }

          if (data) {
            const dataObj = data[0];

            return (
              <div class="container ovf">
                <div>
                  <h2>{dataObj.title}</h2>
                  <h3>{dataObj.summary}</h3>
                  <h4>{dataObj.date}</h4>
                  {<MarkdownPost content={dataObj.content} />}
                  <ul>
                    <li>Some list</li>
                  </ul>
                </div>
                <footer></footer>
              </div>
            );
          }

          return null;
        }}
      </Fetch>
    );
  }
}

export default FetchEntryContent;
