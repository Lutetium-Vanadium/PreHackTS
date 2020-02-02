import * as React from "react";

interface Post {
  title: string;
  link: string;
  image: string;
}

function Post({ title, link, image }) {
  return (
    <div className="post">
      <h3>{title}</h3>
      <img className="img" src={image} alt="Post Image" />
      <a href={link} target="_blank">
        Original Post
      </a>
    </div>
  );
}

export default Post;
