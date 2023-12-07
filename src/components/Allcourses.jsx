import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../Api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "All Courses";
    getAllCoursesFromServer(); // calling loading course function
  }, []);

  // Function to getAllCourses From Server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // for success
        console.log(response.data);
        setCourses(response.data);
        setIsLoaded(true);
      },
      (error) => {
        // for error
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  useEffect(() => {
    if (isLoaded) {
      toast.success("Courses have been loaded");
    }
  }, [isLoaded]);

  function updateCourses(updatedCourse) {
    setCourses(prevCourses => {
        const updatedCourses = prevCourses.map(course => {
            if (course.id === updatedCourse.id) {
                return updatedCourse;
            }
            return course;
        });
        return updatedCourses;
    });
}

  function deleteCourse(id) {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of courses are as follows:</p>
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <Course key={index} course={course} id={course.id} title={course.title} description={course.description} update={updateCourses} delete={deleteCourse}/>
        ))
      ) : (
        <p>No courses</p>
      )}
    </div>
  );
}

export default AllCourses;
