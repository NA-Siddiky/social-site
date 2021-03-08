import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data));
    }, []);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data));
    },[]);
    return (
        <div>
            <h1>This is Post Detail: {id}</h1>
            <p>User Posted: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
            <p>Number of Comments: {comments.length}</p>
            
            {
                comments.map(comment=><Comment comment={comment}></Comment>)
            }

        </div>
    );
};

export default PostDetail;