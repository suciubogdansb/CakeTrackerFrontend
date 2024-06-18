import React from "react";
import {useNavigate} from "react-router-dom";
import {addMember} from "../Controllers/MemberController";

export default function useAddMember({firstName, lastName, birthDate, country, city, setError}:
                                           {
                                               firstName: string;
                                               lastName: string;
                                               birthDate: string;
                                               country: string;
                                               city: string;
                                               setError: React.Dispatch<React.SetStateAction<string>>;
                                           }) {
    const navigate = useNavigate();

    return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (firstName === "" || lastName === "" || birthDate === "" || country === "" || city === "") {
            setError("Entries cannot be empty");
            return;
        }

        addMember(firstName, lastName, birthDate, country, city)
            .then((response) => {
                console.log("Post added");
                navigate(`/`)
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "ERR_NETWORK") {
                    navigate("/error");
                } else if (
                    error.response.status === 401 ||
                    error.response.status === 404 ||
                    error.response.status === 400
                ) {
                    setError(error.response.data.detail);
                }
            });
    };
}
