import _ from 'lodash';
import React, { Component } from 'react';
import TodosListHeader from './todos-list-header2';
import TodoListItem from './todos-list-item3';

//Lodash gives lot of methods that makes writing javascript easier

class TodosList extends Component {

    //to itereate through the array and display each item
    renderItems(){
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props}/>)

    }

    //{...todo} is same as task={todo.task} isCompleted={todo.isCompleted}

    // function(todo, index){
    //     return <TodoListItem key={index} {...todo}/>
    // } Same as (todo, index) => <TodoListItem key={index} {...todo} in above (ES6)

    render() {
        console.log(this.props.todos)
        //this.props will take the properties which are passed to TodosList in App.js as state
        return (
            <table>
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}

export default TodosList;