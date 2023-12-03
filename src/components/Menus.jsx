import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function Menus(){
    return (
        <ListGroup>
            <ListGroupItem tag="a" href="#!" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>Add Course</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>View Courses</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem>
        </ListGroup>
    )

}
export default Menus;