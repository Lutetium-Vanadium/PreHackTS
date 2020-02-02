import * as React from "react";
import { useEffect, useState } from "react";
import axios, { CancelToken } from "axios";

import Post from "./Post";

const formatPosts = postArr => {
  let posts = [];

  for (let i = 0; i < postArr.length; i++) {
    const post = postArr[i].data;

    if (!post.over_18) {
      posts.push({
        title: post.title,
        link: "https://www.reddit.com" + post.permalink,
        image: post.url
      });
    }
  }

  return posts;
};

function ProgrammerHumour() {
  const [posts, setPosts] = useState([]);

  const getPosts = async (cancelToken: CancelToken) => {
    let response = await axios.get("https://www.reddit.com/r/ProgrammerHumor.json", {
      transformResponse: (resStr: string) => {
        return JSON.parse(resStr).data.children;
      },
      cancelToken
    });

    setPosts(formatPosts(response.data));
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    getPosts(source.token);

    return () => {
      source.cancel("Exit");
    };
  }, []);

  return (
    <div className="content">
      {posts.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </div>
  );
}

export default ProgrammerHumour;
