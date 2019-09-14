import React from "react";
import BlogEntry from "./BlogEntry";
import { Fetch } from "react-request";

const localStorage = window.localStorage;

class FetchAllBlogEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fetch url="https://localhost:5000/blogs">
        {({ fetching, failed, data }) => {
          if (fetching) {
            return (<div></div>)
          }

          if (failed) {
            return <div>The request did not succeed.</div>;
          }

          if (data) {
            localStorage.setItem("blogs", JSON.stringify(data));
              return (
                <div>
                {data.map(item => (
                <ul key={item.id} className="center post">
                <BlogEntry item={item} />
                </ul>
            ))}
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

export default FetchAllBlogEntries;
