import AddForm from "../Components/AddForm";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import React from "react";

export default function AddPage() {
    return (
        <div className="MainPage">
            <Link to="/" style={{height: "fit-content"}}>
                <Button className="button">Back</Button>
            </Link>
            <AddForm/>
        </div>
    );
}