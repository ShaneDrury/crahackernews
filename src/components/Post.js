import React from "react";

const Post = ({ url, title }) => (
  <div>
    <a href={url}>{title}</a>
  </div>
);

export default Post;
