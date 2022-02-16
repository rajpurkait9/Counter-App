import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  getBadges() {
    return this.props.counter.value === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }

  render() {
    return (
      <div>
        <span className={this.getBadges()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary m-2'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className='btn btn-warning m-2 '
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger m-2'
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
