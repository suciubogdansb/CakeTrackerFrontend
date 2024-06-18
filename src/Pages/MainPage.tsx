import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import MemberList from "../Components/MemberList";
import "../Style/Style.css";

export default function MainPage() {
    return (
        <div className="MainPage">
            <Link to="/add" style={{height: "fit-content"}}>
                <Button className="button">Add Member</Button>
            </Link>
            <MemberList/>
        </div>
    );
}

