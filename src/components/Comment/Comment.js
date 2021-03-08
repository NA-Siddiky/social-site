import React from 'react';

const Comment = (props) => {
    const { name, email } = props.comment;

    return (
        <div style={{border: '1px solid lightblue', margin: '5px'}}>
            <p>Commenter name: {name}</p>
            <br />
            <p>Commenter email: {email}</p>
        </div>
    );
};

export default Comment;