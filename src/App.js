import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
  state = {
    todo: "",
    id: 1,
    todos: [],
  };

  textChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  removeTodo = (id) => {
    const index = this.state.todos.findIndex((element) => element.id === id);
    const updatedTodo = this.state.todos;
    updatedTodo.splice(index, 1);
    this.setState({ todos: updatedTodo });
  };

  insertTodo = (e) => {
    e.preventDefault();

    let text = this.state.todo;

    if (text === "") {
      return alert("Empty");
    }

    let todos = this.state.todos;
    let exitingId = this.state.id;
    exitingId++;

    let todo = {
      id: exitingId,
      text,
      checked: false,
    };

    todos.push(todo);
    this.setState({ todos, todo: "", id: exitingId });
  };

  render() {
    return (
      <div>
        <div className="App">
          <Heading text="To-Do List !" />
          <Form
            textChange={this.textChange}
            insertTodo={this.insertTodo}
            todo={this.state.todo}
          />
        </div>
        <List todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
