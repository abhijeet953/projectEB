import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import pic from "../assets/pic.png";

function Home() {
  return (
    <div className="Home">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Container>
          <Row>
            <Col sm={6}>
              <Row>
                <Container className="content-text">
                  Matching developers
                  <br /> with great companies.
                </Container>
                <Col sm={6}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title> For Companies</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button> Start Exploring </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Title> For Capital Seekers</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <Button href="/SignIn"> Sign Up</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <img className="content-pic" src={pic} alt="EB1.0" />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              Copyright © 2022 EarnBazaar | Careers
              <br />
              Privacy Policy
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
