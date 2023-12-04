import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Allcourses from './components/Allcourses';
import Addcourse from './components/Addcourse';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  // const notify = () => toast("Wow so easy!");
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<Addcourse />} />
                <Route path="/view-course" element={<Allcourses />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
