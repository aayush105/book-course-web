import React, { Fragment } from "react";
import { Form, FormGroup, Input } from "reactstrap";

function Addcourse(){

    return (
        <Fragment>
            <Form>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" />
                </FormGroup>
            </Form>
            
        </Fragment>
    )
}