import React from "react";
import BlogEntry from "./BlogEntry";
import { Fetch } from "react-request";

const localStorage = window.localStorage;

const API_KEY = process.env.API_KEY;
const URL =`https://briceidamariscal-eval-prod.apigee.net/briceidaomars/blogs?apikey=${API_KEY}`

class FetchAllBlogEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fetch
      url={URL}>
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
            localStorage.setItem("blogs", JSON.stringify(data));
              return (
                <div className="card1 post brd">
                {data.map(item => (
                <ul key={item.id}>
                <BlogEntry item={item} />
                </ul>
            ))}
                </div>
            );
          }

          return null;
        }}
      </Fetch>
    );
  }
}

export default FetchAllBlogEntries;
