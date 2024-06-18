import useAddMember from "../Hooks/useAddMember";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";

export default function AddForm() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>(""); // Date
    const [country, setCountry] = useState<string>("");
    const [city, setCity] = useState<string>("");

    const [error, setError] = useState("");

    const handleSubmit = useAddMember({
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        country: country,
        city: city,
        setError: setError
    });

    return (
        <Form className="AddForm">
            <Form.Group className="FormGroup">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="FormGroup">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="FormGroup">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Enter birth date"
                    onChange={(e) => setBirthDate(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="FormGroup">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter country"
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="FormGroup">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter city"
                    onChange={(e) => setCountry(e.target.value)}
                />
            </Form.Group>
            <Button onClick={handleSubmit} className="button" type="submit">
                Submit
            </Button>
            {error && <div className="Error">{error}</div>}
        </Form>
    );
};