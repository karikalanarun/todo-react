import React, { Component, Suspense } from "react";
import "./Todo.css";
// import List from "./TodoList";
import ErrorBoundary from "./ErrorBoundary";

const List = React.lazy(() => import("./TodoList"));

export default class TodoList extends Component {
  state = {
    value: null,
  };
  render() {
    return (
      <>
        <div className="header">
          <h2 style={{ margin: "5px" }}>My To Do List</h2>
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <span
            className="addBtn"
            onClick={() => {
              this.props.onAdd({ title: this.state.value });
            }}
          >
            Add
          </span>
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <List {...this.props}></List>
          </Suspense>
        </ErrorBoundary>
      </>
    );
  }
}
