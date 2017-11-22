import React, { Component } from 'react';

export default class CommentBox extends Component{
    render(){
        return (
            <div className="commentBox">
                <textarea />
                <button>Submit Comment</button>
            </div>
        );
    }
}