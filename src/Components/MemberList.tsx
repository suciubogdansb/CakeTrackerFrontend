import {useEffect, useState} from "react";
import {Member} from "../Domain/Member";
import {Button} from "react-bootstrap";
import MemberListElement from "./MemberListElement";
import useGetMembers from "../Hooks/useGetMembers";
import useGetSortedMembers from "../Hooks/useGetSortedMembers";

export default function MemberList() {
    const [sorted, setSorted] = useState(false);
    const [members, setMembers] = useState<Member[]>([]);

    const getMembers = useGetMembers(setMembers);
    const getSortedMembers = useGetSortedMembers(setMembers);

    useEffect(() => {
        if(sorted) {
            getSortedMembers();
        }
        else {
            getMembers();
        }
    }, [sorted]);

    return (
        <div className="MemberList">
            <Button onClick={() => setSorted(!sorted)} className="button">{sorted ? 'Get Sorted' : 'Get Random'}</Button>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Date</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Days Until Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <MemberListElement member={member}/>
                    ))}
                </tbody>
            </table>
        </div>
    );

}