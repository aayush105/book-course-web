import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import { Button } from 'reactstrap';
import axios from "axios";
import base_url from "../Api/bootapi";
import { toast } from "react-toastify";

function Addcourse(){
    useEffect(() =>{
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({
        id: "",
        title: "",
        description: "",
    });

    //form handler function
    function handleChange(event) {
        const { name, value } = event.target;
    
        setCourse(prevCourse => {
          return {
            ...prevCourse,
            [name]: value
          };
        });
      }

    //form submit handler
    function handleForm(event) {
        console.log(course);
        setCourse({
            id: "",
            title: "",
            description: "",
        });
        postDataToServer(course);
        event.preventDefault();
    }

    // creating function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses/add`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                setCourse({
                    id: "",
                    title: "",
                    description: "",
                })
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error! Something went wrong");
            }
        );
    }

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="int" placeholder="Enter here" value={course.id} name="id" id="userId" onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" value={course.title}  name="title" id="title"  onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" value={course.description} name="description" id="description" style={{height:150}} onChange={handleChange} />
                </FormGroup>  
                <Container className="text-center">
                    <Button type="submit" color="success" style={{ marginRight: '10px' }}>Add Course</Button>
                    <Button color="warning" onClick={()=>{
                        setCourse({
                            id: "",
                            title: "",
                            description: "",
                        });
                    }}>Clear</Button>
                </Container>       
            </Form>
            
        </Fragment>
    )
}
export default Addcourse;