import axios from "axios";
import React, {useState} from "react";
import { Container, Card, CardBody, CardText, CardSubtitle, Button, Form, FormGroup, Label, Input  } from 'reactstrap';
import base_url from "../Api/bootapi";
import { toast } from "react-toastify";

function Course(course){

    const [isEditing, setIsEditing] = useState(false);
    const [editedCourse, setEditedCourse] = useState({...course});

    // function to handle input change
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setEditedCourse({...editedCourse, [name]: value});
    };

    // function to handle update
    const handleUpdate = () => {
        axios.put(`${base_url}/courses/update`, editedCourse).then(
            (response) => {
                toast.success("Course updated successfully");
                setIsEditing(false);
                course.update(editedCourse);
            },
            (error) => {
                toast.error("Course not updated ! Something went wrong");
            }
        )
    }

    // function to handle delete
    const handleDelete = (id) => {
        const courseId = parseInt(id); // Convert id to integer
        axios.delete(`${base_url}/courses/delete/${courseId}`).then(
            (response) => {
                toast.success("Course deleted successfully");
                course.delete(courseId);
            },
            (error) => {
                toast.error("Course not deleted ! Something went wrong");
            }
        )
        
    }

    return(
        <Card className="text-center">
        <CardBody>
            {isEditing ? (
                <Form>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" value={editedCourse.title} onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" value={editedCourse.description} onChange={handleInputChange} />
                    </FormGroup>
                    <Button color="success" onClick={handleUpdate}>Save</Button>{' '}
                    <Button color="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                </Form>
            ) : (
                <>
                    <CardSubtitle tag="h5">{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className="text-center mt-3">
                        <Button color="danger" style={{ marginRight: '10px' }} onClick={() => {
                            handleDelete(course.id);
                        }}>Delete</Button>
                        <Button color="warning" onClick={() => setIsEditing(true)}>Edit</Button>
                    </Container>
                </>
            )}
        </CardBody>
    </Card>
    )


}

export default Course;