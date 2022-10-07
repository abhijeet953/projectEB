import "./Post.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React , {useState} from "react";
import axios from 'axios';
import Container from "react-bootstrap/esm/Container";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  console.log(PF + post.photo);
  
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="Eb" />}
      <Container className="postInfo">
          <span className="postTitle">{post.title}</span>
      </Container>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
