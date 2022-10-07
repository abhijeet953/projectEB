import React from 'react'
import './Header.css';
import logoUrl from '../assets/logo.svg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Header = () => (
  <Container className="header" sticky="top" >
    <Row>
        <Col sm={8}>
            EarnBazaar
            <img src={logoUrl} alt="EB1.0" />
        </Col>
        <Col sm={4} className='login'>
            <Button className='btn-sm btn-primary' href='/LogIn'>
                login
            </Button>
            <Button className='btn-sm btn-light' href='/SignIn'>
                signUp
            </Button>     
        </Col>
    </Row>
  </Container>
)
export default Header;