import React from 'react';
import './App.css';
// import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';

function App() {
  // const notify = () => toast("Wow so easy!");
  return (
    <div>
      <ToastContainer />
      <Home />
      
      <Allcourses />
    </div>
  );
}

export default App;
