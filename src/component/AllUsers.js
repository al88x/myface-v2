import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import User from "./User";
import '../style/AllUsers.scss'

export function AllUsers() {
    const [hasError, setErrors] = useState("");
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState({});

    let {id} = useParams();

    async function fetchData() {
        if (id) {
            const response = await fetch(`http://localhost:8080/api/users/${id}`);
            const json = await response.json();
            return json;

        } else {
            const response = await fetch('http://localhost:8080/api/users');
            const json = await response.json();
            return json.items;
        }
    }

    useEffect(() => {

        if (id) {
            fetchData()
                .then(res => setSingleUser(res))
                .catch(err => setErrors(err));
        } else {
            fetchData()
                .then(res => setUsers(res))
                .catch(err => setErrors(err));
        }
    }, [id]);

    if (hasError) {
        console.log(hasError);
        return <div>"something went wrong"</div>;
    }

    if (!users) {
        return <div>No Users Yet!</div>;
    }

    if (id) {
        return <User>{singleUser}</User>;
    }
    return (
        <ol className="users-list">
            {users.map(user => <User>{user}</User>)};
            <Link to={"/users/create"} className="allPosts-create">+</Link>
        </ol>
    );
};