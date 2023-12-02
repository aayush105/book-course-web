import React from "react";
import { Container, Card, CardBody, CardTitle, CardText, CardSubtitle, CardFooter, Button } from 'reactstrap';

function Course(course){
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle tag="h5">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center mt-3">
                    <Button color="danger" style={{ marginRight: '10px' }}>Delete</Button>
                    <Button color="warning">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )


}

export default Course;