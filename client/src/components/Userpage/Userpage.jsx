import axios from "axios";
import "./Userpage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./assets/Header/Header";
import Posts from "./assets/Posts/Posts";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoUrl from "../assets/logo.svg";
import { Context } from "../context/Context";

import UIAvatar from "react-ui-avatars";
var SignOut = false;

function Userpage() {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  function handleSignOut(event) {
    SignOut = true;
    localStorage.clear();
    navigate("/");
  }
  function handleWrite(event) {
    const userObject = localStorage.getItem("user");
    console.log("user is from up " + userObject);
    if (userObject != null) {
      navigate("/Write");
    } else navigate("/LogIn");
  }
  // var user = {
  //   email: localStorage.getItem("userEmail"),
  //   id: localStorage.getItem("userId"),
  //   firstName: localStorage.getItem("userfirstName"),
  //   lastName: localStorage.getItem("userlastName"),
  // };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // if (localStorage.getItem("user") === null) {
    //   navigate("/LogIn");
    // }
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
    if (user === null) {
      navigate("/LogIn");
    }
  }, []);
  useEffect(() => {
    SignOut = false;
    // localStorage.clear();
    SignOut = false;
    // navigate('/');
  }, [SignOut]);
  return (
    <div className="userPage">
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        className="nav-sm"
      >
        <Container>
          <Navbar.Brand href="#home">
            EarnBazaar
            <img
              alt=""
              src={logoUrl}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav className="write-btn">
              <Button
                onClick={(e) => handleWrite(e)}
                className="btn-light btn-sm "
                id="writeBtn"
              >
                Write
              </Button>
            </Nav>
            <Nav>
              <NavDropdown
                title={
                  <i class="fa-regular fa-user profileIcon">
                    {" "}
                    <i className="profileText"> Profile</i>{" "}
                  </i>
                }
                id="collasible-nav-dropdown"
              >
                {user && (
                  <NavDropdown.Item>
                    <UIAvatar
                      className="avatar"
                      background="random"
                      size="30"
                      name={user.username}
                      rounded={true}
                    />{" "}
                    {user.username}{" "}
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item className="navBtn">
                  <Button
                    onClick={(e) => handleSignOut(e)}
                    className="btn-light"
                  >
                    Log Out
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Container className="postData"> */}
      <Posts postsArray={posts} />

      {/* </Container> */}
      <Button onClick={(e) => handleSignOut(e)} className="btn-light">
        Log Out
      </Button>
      <Button onClick={(e) => handleWrite(e)} className="btn-light">
        Write
      </Button>
    </div>
  );
}

export default Userpage;
