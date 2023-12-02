import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
function Home(){
    return(
        <div style={{ backgroundColor: '#343a40', padding: '20px' }}>
        <Container className="text-center">
            <Row className="my-4">
            <Col>
                <Card bg="dark" text="light">
                <CardBody>
                    <CardTitle className="display-3" tag="h5">Course Application</CardTitle>
                    <CardText>
                    This website helps you manage a list of books. You can add new books and delete ones you don't need. It's made using Spring Boot for the behind-the-scenes work and ReactJS for what you see and interact with on the site.
                    </CardText>
                </CardBody>
                </Card>
            </Col>
            </Row>
            <Button outline color="warning" size="sm">Start Exploring</Button>
        </Container>
    </div>
    );
}
export default Home;