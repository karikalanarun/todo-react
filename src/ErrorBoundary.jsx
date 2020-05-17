import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { err: false };
  static getDerivedStateFromError(err) {
    console.log(err);
    return { err: true };
  }
  componentDidCatch(err) {
    console.log(err);
  }

  render() {
    if (this.state.err) {
      return <h1>Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}
