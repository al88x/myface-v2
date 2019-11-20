import React, {useState, useEffect} from "react";
import Post from "./Post";
import '../style/AllPosts.scss'


export function AllPosts() {

    const [hasError, setErrors] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        const response = await fetch('http://localhost:8080/api/posts');
        const json = await response.json();
        return json.items;
    }

    useEffect(() => {
        fetchData()
            .then(res => setPosts(res))
            .catch(err => setErrors(err));
    }, []);

    if (hasError) {
        return <div>{hasError}</div>
    }

    if (!posts) {
        return <div>No Posts Yet!</div>
    }

    return (
        <ul className="posts-list">
            {posts.map(post => <Post>{post}</Post>)}
        </ul>
    );
};