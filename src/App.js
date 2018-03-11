import React, { Component } from 'react';
import TodosList from './components/todos-list1';
import CreateTodo from './components/create-todo';
import _ from 'lodash'
import './App.css';

//const todos 

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //todos:todos - this is without ES6
      todos : [
        // {
        //   task: 'make reat tutorial',
        //   isCompleted: false
        // },
        // {
        //   task: 'started app',
        //   isCompleted: true
        // }
      ],
      count:0
      //short hand syntax with ES6
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">ToDo Application</h1>
        <h5> You have {this.state.count} tasks</h5>
        <CreateTodo create={this.createTask.bind(this)} />
        <br/>
        <TodosList todos={this.state.todos}
          saveTask={this.saveTask.bind(this)} 
          deleteTask = {this.deleteTask.bind(this)}/>
      </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos,
    count: this.state.todos.length });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos, count: this.state.todos.length  });
  }
}

export default App;
