import React, { Component } from 'react';
//import './task.css';

class TodosListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            isDone: false
        };
    }

    renderTaskSection() {

        if (this.state.isEditing) {
            return (
                    <td>
                        <form onSubmit={this.onSaveClick.bind(this)}>
                            <input type="text" defaultValue={this.props.task} ref="editInput" />
                        </form>
                    </td>
            );
        }
        return (
            <div>
                <td>
                    <input type="checkbox" onClick={this.isChecked.bind(this)} />
                </td>
                <td className={this.state.isDone?"taskDone":""}>{this.props.task}</td>
            </div>
        )
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancel.bind(this)}>Cancel</button>
                </td>
            );
        }//else

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );// .bind will bind to this.state
    }

    onEditClick() {
        this.setState({ isEditing: true })
    }

    isChecked(evt){
        //console.log(evt.target.checked);
        this.setState({ isDone:evt.target.checked })

    }

    onSaveClick(event) {
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false })
    }

    onCancel() {
        this.setState({ isEditing: false })
    }
}

export default TodosListItem;