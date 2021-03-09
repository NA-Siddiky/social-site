import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data));
        // console.log(posts);
    }, []);

    return (
        <div>
            <h1>Your Posts</h1>
            <h3>I have post: {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;