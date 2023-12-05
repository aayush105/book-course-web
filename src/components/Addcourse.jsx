import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import { Button } from 'reactstrap';
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
        event.preventDefault();
    }
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" value={course.id} name="id" id="userId" onChange={handleChange} />
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
                    <Button color="warning">Clear</Button>
                </Container>       
            </Form>
            
        </Fragment>
    )
}
export default Addcourse;