import React from "react";
import BlogEntry from "./BlogEntry";
import MarkdownPost from "./MarkdownPost";
import { Fetch } from "react-request";

const localStorage = window.localStorage;

const API_KEY = process.env.API_KEY;

class FetchEntryContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pathNum = window.location.pathname.split('-').pop()
    const ID = this.props.location.param1 || localStorage.getItem('id') || pathNum;
    const url = `https://briceidamariscal-eval-prod.apigee.net/briceidaomars/entry/${ID}?apikey=${API_KEY}`;
    localStorage.removeItem('id');
    localStorage.setItem('id', ID);


    return (
      <Fetch
      url={url}>
        {({ fetching, failed, data }) => {
          if (fetching) {
            return( <div className="d-flex justify-content-center">
                   <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                    </div>
                    </div>)
          }

          if (failed) {
            return <div>The request did not succeed.</div>;
          }

          if (data) {
            localStorage.setItem("blog", JSON.stringify(data));
            const dataObj = data[0];
            console.log("dataobj");
            console.log(dataObj);
              return (
            <div className="flex-container">
              <div id="div-1">
            </div>
            <div id="div-2 card">
                  <h2>{dataObj.title}</h2>
                  <h4>{dataObj.summary}</h4>
                  <h4>{dataObj.date}</h4>
                  <br/>
                 {<MarkdownPost content={dataObj.content} />}
                <div d="lab_social_icon_footer">
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
            <div className="container">
            <div className="text-center center-block">
            <a href="https://twitter.com/BriceidaMars"><i id="social-tw" className="fa fa-twitter-square fa-3x social icons"></i></a>
            <a href="mailto:briceidamariscal@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social icons"></i></a>
            </div>
            </div>
            </div>
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
