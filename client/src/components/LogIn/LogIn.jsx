import "./LogIn.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logoUrl from "../assets/logo.svg";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";

function LogIn() {
  const navigate = useNavigate();
  // function handleCallbackResponse(res) {
  //   // console.log("Encoded JWT Id token"  + res.credential);
  //   var userObject = jwt_decode(res.credential);
  //   setUser(userObject);
  //   localStorage.setItem("userId", userObject.jti);
  //   localStorage.setItem("userFirstName", userObject.given_name);
  //   localStorage.setItem("userLastName", userObject.family_name);
  //   localStorage.setItem("userPic", userObject.picture);
  //   localStorage.setItem("userEmail", userObject.email);
  //   console.log(userObject);
  //   navigate("/Userpage");
  // }

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      
      navigate("/Userpage");

    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  
  // useEffect(() => {
  //   // /*global google*/
  //   // if (localStorage.getItem("userId")) {
  //   //   navigate("/Userpage");
  //   // }
  //   // google.accounts.id.initialize({
  //   //   client_id:
  //   //     "32058004968-vd6b774grrif4tnud31l6vf2hl9gil98.apps.googleusercontent.com",
  //   //   callback: handleCallbackResponse,
  //   // });

  //   // google.accounts.id.renderButton(document.getElementById("logInDiv"), {
  //   //   theme: "outline",
  //   //   size: "medium",
  //   // });
  // }, []);
  console.log(isFetching);
  return (
    <div className="LogIn">
      <Row className="justify-content-md-center">
        <Col md="auto" className="cont-body1">
          EarnBazaar <img className="pic" src={logoUrl} alt="EB1.0" />
        </Col>
        <Row className="justify-content-md-center">
        </Row>
        <span className="loginTitle">LogIn</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <Row className="justify-content-md-center ">
            <Col xs lg="2" className="inputType">
              Username:
            </Col>
            <Col xs lg="2">
              <input
                type="text"
                className="loginInput"
                placeholder="Enter your username..."
                ref={userRef}
              />
            </Col>

            <Row className="justify-content-md-center">
              <Col xs lg="2" className="inputType">
                Password:
              </Col>
              <Col xs lg="2">
                <input
                  type="password"
                  className="loginInput"
                  placeholder="Enter your password..."
                  ref={passwordRef}
                />
              </Col>
            </Row>
            <Row className="justify-content-md-center ">
              <Col xs lg="2">
                <Button
                  className="loginButton btnReg btn-warning"
                  type="submit"
                  disabled={isFetching}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Row>
        </form>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <hr />
            </Col>
            <Col md="auto">Or LogIn using</Col>
            <Col xs lg="3">
              <hr />
            </Col>
          </Row>
          <Button id="logInDiv" className="btn-light btn-sm" />
        </Col>
      </Row>
    </div>
  );
}

export default LogIn;
