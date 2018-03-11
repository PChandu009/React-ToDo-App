import React, { Component } from 'react';

class CreateTodo extends Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Enter new todo task" ref="createInput"/> 
                <button>Create new</button>
            </form>
        );
    }

    handleCreate(event){
        event.preventDefault();
        this.props.create(this.refs.createInput.value);
        this.refs.createInput.value='';
    }
}

export default CreateTodo;