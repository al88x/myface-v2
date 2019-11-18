import React, {useState, useEffect} from "react";

export function Posts(){

    const [hasError, setErrors] = useState(false);
    const [posts, setPosts] = useState({});

    async function fetchData() {
        console.log("fetching data");
        const res = await fetch('http://localhost:8080/api/posts');
        res.json()
            .then(res => setPosts(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        console.log("using the effect");
        fetchData();
    },[]);

    return (
        <div>
            <span>{JSON.stringify(posts)}</span>
            <hr/>
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    );
};