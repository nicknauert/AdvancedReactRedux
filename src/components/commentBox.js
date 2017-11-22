import React, { Component } from 'react';

export default class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state = { comment: '' };
    }

    handleChange(e){
        this.setState({ comment: e.target.value });
    }
    
    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}  className="commentBox">
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange.bind(this)} />
                <button >Submit Comment</button>
            </form>
        );
    }
}