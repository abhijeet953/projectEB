import "./SignIn.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import logoUrl from "../assets/logo.svg";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState, useContext } from "react";
import { Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";

const dotenv = require("dotenv");
dotenv.config();

function SignIn() {
  const [userInfo, setUser] = useState({});
  const { user } = useContext(Context);
  const navigate = useNavigate();

  function handleCallbackResponse(res) {
    // console.log("Encoded JWT Id token" + res.credential);
    var userObject = jwt_decode(res.credential);
    setUser(userObject);
    localStorage.setItem("userId", userObject.jti);
    localStorage.setItem("userFirstName", userObject.given_name);
    localStorage.setItem("userLastName", userObject.family_name);
    localStorage.setItem("userPic", userObject.picture);
    localStorage.setItem("userEmail", userObject.email);
    // user = {
    //   email: localStorage.getItem("userEmail"),
    //   id: localStorage.getItem("userId"),
    //   firstName: localStorage.getItem("userfirstName"),
    //   lastName: localStorage.getItem("userlastName"),
    // };
    navigate("/Userpage");
  }
  console.log("google " + process.env.REACT_APP_GOOGLE_CLIENT_ID);

  useEffect(() => {
    /*global google*/
    if (localStorage.getItem("userId")) {
      navigate("/Userpage");
    }
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
    });
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);

      res.data && window.location.replace("/LogIn");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="SignIn">
      <Row className="justify-content-md-center">
        <Col md="auto" className="cont-body1">
          EarnBazaar <img className="pic" src={logoUrl} alt="EB1.0" />
        </Col>
        <Row className="justify-content-md-center">
          <Col md="auto" className="contbody2">
            {" "}
            <h5>For Capital Seekers</h5>
            <h6>Find the best capital</h6>{" "}
          </Col>
        </Row>
        <span className="registerTitle">Register</span>
        <form
          className="registerForm"
          onSubmit={handleSubmit}
          autoComplete={false}
        >
          <Row className="justify-content-md-center ">
            <Col xs lg="2" className="inputType">
              Username:
            </Col>
            <Col xs lg="2">
              <input
                type="text"
                className="registerInput"
                placeholder="Enter your username..."
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
            <Row className="justify-content-md-center">
              <Col xs lg="2" className="inputType">
                Email:
              </Col>
              <Col xs lg="2">
                <input
                  type="text"
                  className="registerInput"
                  placeholder="Enter your email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col xs lg="2" className="inputType">
                Password:
              </Col>
              <Col xs lg="2">
                <input
                  type="password"
                  className="registerInput"
                  placeholder="Enter your password..."
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="justify-content-md-center ">
              <Col xs lg="2">
                <Button
                  className="registerButton btnReg btn-warning"
                  type="submit"
                >
                  Register
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
            <Col md="auto">Or Connect using</Col>
            <Col xs lg="3">
              <hr />
            </Col>
          </Row>
          <Button id="signInDiv" className="btn-light btn-sm">
            {" "}
            Start Exploring{" "}
          </Button>
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>
              Something went wrong!
            </span>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default SignIn;
