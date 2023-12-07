import React from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './Home';
import Allcourses from './Allcourses';
import Addcourse from './Addcourse';
import { Container, Row, Col} from 'reactstrap';
import Header from './Header';
import Menus from './Menus';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Footer';


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
              </Routes>
            </Col>
          </Row>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
