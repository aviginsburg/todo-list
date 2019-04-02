import React, { Component } from "react";
import TimeofDay from "./TimeofDay";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";
import Moment from "react-moment";
import "moment-timezone";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: todosData
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const ToDoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <div>
        <div className="navbar">
          <h1>Todo List</h1>
        </div>

        <TimeofDay />

        <div className="todo-list">{ToDoItems}</div>
      </div>
    );
  }
}

export default App;
