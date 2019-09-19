import React from "react";
import MarkdownPost from "./MarkdownPost";
import { Fetch } from "react-request";

const localStorage = window.localStorage;
const API_KEY = process.env.API_KEY;

class FetchEntryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let ID = this.props.location.param1
    ID = ID? ID : localStorage.getItem("id");

    const url = `https://briceidamariscal-eval-prod.apigee.net/briceidaomars/entry/${ID}?apikey=${API_KEY}`;
    localStorage.removeItem('id');
    localStorage.setItem('id', ID);

    return (
      <Fetch
      url={url}>
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
            <div className="flex-container">
              <div id="div-1">
            </div>
            <div id="div-2">
                  <h2>{dataObj.title}</h2>
                  <h4>{dataObj.summary}</h4>
                  <h4>{dataObj.date}</h4>
                  <br/>
                 {<MarkdownPost content={dataObj.content} />}
                <footer d="lab_social_icon_footer">
                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
                <div class="container">
                <div class="text-center center-block">
                    <a href="https://twitter.com/BriceidaMars"><i id="social-tw" class="fa fa-twitter-square fa-3x social icons"></i></a>
                    <a href="mailto:briceidamariscal@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social icons"></i></a>
            </div>
            </div>
             </footer>
            </div>
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
