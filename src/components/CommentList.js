import React, { Component } from 'react';

const CommentList = (props) => {
    console.log(props.comments);
    return (
        <ul className="commentList" >
            {props.comments.map( comment => <li>comment</li>)}
        </ul>
    );
}

export default CommentList;
