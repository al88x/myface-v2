import React, {useState, useEffect} from "react";
import User from "./User";
import '../style/AllUsers.scss'

export function AllUsers(){
    const [hasError, setErrors] = useState("");
    const [users, setUsers] = useState([]);

    async function fetchData() {
        const response = await fetch('http://localhost:8080/api/users');
        const json = await response.json();
        return json.items;
    }

    useEffect(() => {
        fetchData()
            .then(res => setUsers(res))
            .catch(err => setErrors(err));
    }, []);

    if (hasError) {
        console.log(hasError);
        return <div>"something went wrong"</div>;
    }

    if (!users) {
        return <div>No Users Yet!</div>;
    }

    return (
        <ol className="users-list">
            {users.map(user => <User>{user}</User>)};
        </ol>
    );
};