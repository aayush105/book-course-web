import React, {useState} from "react";
import Course from "./Course";

function Allcourses(){
    const [courses, setCourses] = useState([
        {title: "Java Course", description: "This is a Java course"},
        {title: "Django Course", description: "This is a Django course"},
        {title: "React Js Course", description: "This is a React Js course"},
        {title: "Angular Course", description: "This is a Angular course"}
    ]);
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>
            {
                courses.length > 0? courses.map((course)=>
                (
                    <Course title={course.title} description={course.description} />
                   
                )) : "No courses"
            }
        </div>
    )
}
export default Allcourses;