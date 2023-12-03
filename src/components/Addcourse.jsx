import React, { Fragment } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import { Button } from 'reactstrap';
function Addcourse(){

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title" />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description" style={{height:150}} />
                </FormGroup>  
                <Container className="text-center">
                    <Button color="success" style={{ marginRight: '10px' }}>Add Course</Button>
                    <Button color="warning">Clear</Button>
                </Container>       
            </Form>
            
        </Fragment>
    )
}
export default Addcourse;