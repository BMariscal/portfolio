import React, { dangerouslySetInnerHTML, __html } from "react";

import { Remarkable } from "remarkable";
import hljs from "highlightjs";

const MarkdownPost = props => {
  const md = new Remarkable("full", {
    html: false, // Enable HTML tags in source
    xhtmlOut: false, // Use '/' to close single tags (<br />)
    breaks: false, // Convert '\n' in paragraphs into <br>
    langPrefix: "language-", // CSS language prefix for fenced blocks
    linkify: true, // autoconvert URL-like texts to links
    linkTarget: "", // set target to open link in

    typographer: false,
    quotes: "“”‘’",

    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (__) {}

      return "";
    }
  });

  const getRawMarkup = () => {
    return { __html: md.render(props.content) };
  };

  return <div className="content" dangerouslySetInnerHTML={getRawMarkup()} />;
};

export default MarkdownPost;
