import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import { Route, Routes } from "react-router-dom";

function Posts({ postsArray }) {
  return (
    <div className="postsContent">
     
      {postsArray.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}

export default Posts;
