import React from "react";
import "./App.css";
import Todo from "./Todo";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  state = {
    loading: true,
    todoList: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/todos")
      .then(({ data: todoList }) => {
        this.setState({ todoList, loading: false });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    if (this.state.loading) {
      axios
        .get("http://localhost:3000/todos")
        .then(({ data: todoList }) => {
          this.setState({ todoList, loading: false });
        })
        .catch((err) => console.log(err));
    }
  }

  todoAdded({ title }) {
    axios
      .post("http://localhost:3000/todo", { title, completed: false })
      .then(() => {
        this.setState({ loading: true });
      });
  }
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          {(this.state.loading && "Loading") || (
            <Todo
              list={this.state.todoList}
              onAdd={this.todoAdded.bind(this)}
            ></Todo>
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
