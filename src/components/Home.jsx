import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
function Home(){
    useEffect(() =>{
        document.title = "Home";
    }, []);
    return(
        <div style={{ backgroundColor: '#343a40', padding: '20px', borderRadius: '15px' }}>
        <Container className="text-center">
            <Row className="my-6"> 
                <Col className="my-2">
                    <Card bg="dark" text="light" >
                        <CardBody>
                            <CardTitle tag="h5">Course Application</CardTitle>
                            <CardText>
                                This website helps you manage a list of books. You can add new books, edit existing ones, and delete ones you don't need. It's made using Spring Boot for the behind-the-scenes work and ReactJS for what you see and interact with on the site.
                            </CardText>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Button href="/view-course" action outline color="warning" size="sm">Start Exploring</Button>
        </Container>
    </div>
    );
}
export default Home;