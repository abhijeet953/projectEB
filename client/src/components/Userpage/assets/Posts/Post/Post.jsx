import "./Post.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/esm/Container";

export default function Post({ post }) {
  return (
    <div className="post">
      <Container className="postInfo">
          <span className="postTitle">{post.title}</span>
      </Container>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
