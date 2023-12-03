import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menus';

function App() {
  // const notify = () => toast("Wow so easy!");
  return (
    <div>
      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
