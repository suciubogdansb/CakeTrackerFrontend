import getAllMembers from "../Controllers/MemberController";
import {useNavigate} from "react-router-dom";
import {Member} from "../Domain/Member";
import React from "react";

function getMembersHelper(
    navigate: ReturnType<typeof useNavigate>,
    setMembers: React.Dispatch<React.SetStateAction<Member[]>>
) {
    let members: Member[] = [];

    getAllMembers()
        .then((response) => {
            console.log(response);
            response.data.forEach((member: Member) => {
                const formattedMember = {
                    ...member,
                    birthDate: new Date(member.birthDate)
                };
                members.push(formattedMember);
            });
            setMembers(members);
        })
        .catch((error) => {
            console.log(error);
            if (error.code === "ERR_NETWORK") {
                console.log("Network error");
                navigate("/error");
            }
        });
}

export default function useGetMembers(
    setMembers: React.Dispatch<React.SetStateAction<Member[]>>
) {
    const navigate = useNavigate();

    return () => getMembersHelper(navigate, setMembers);
}
