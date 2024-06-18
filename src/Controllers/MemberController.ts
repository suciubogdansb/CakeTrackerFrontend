import axios from "axios";
import {MemberCreate} from "../Domain/Member";

const API_URL = "http://localhost:8000";

export default async function getAllMembers() {
    return await axios.get(`${API_URL}/members`);
}

export async function getSortedMembers() {
    return await axios.get(`${API_URL}/members/sorted`);
}

export async function addMember(
    firstName: string,
    lastName: string,
    birthDate: string,
    country: string,
    city: string
) {
    const newMemberCreate: MemberCreate=
    {
        firstName: firstName,
        lastName: lastName,
        birthDate: new Date(birthDate),
        country: country,
        city: city
    }
    return await axios.post(`${API_URL}/members`, newMemberCreate);
}