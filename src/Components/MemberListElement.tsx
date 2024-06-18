import {Member} from "../Domain/Member";

export default function MemberListElement({ member }: { member: Member }) {
  return (
    <tr>
        <td>{member.firstName}</td>
        <td>{member.lastName}</td>
        <td>{member.birthDate.toDateString()}</td>
        <td>{member.country}</td>
        <td>{member.city}</td>
        <td>{member.daysTillBirthday}</td>
    </tr>
  );
}