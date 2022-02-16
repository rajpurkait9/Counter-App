import React, { Component } from "react";

import Counters from "./components/counters";
import Navabr from "./components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = counterId => {
    const del = this.state.counters;
    const counters = del.filter(c => c.id !== counterId);

    this.setState({ counters });
  };
  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = value => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(value);
    counters[index] = { ...value };

    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = value => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(value);
    counters[index] = { ...value };

    counters[index].value--;
    if (counters[index].value < 0) {
      return counters[index].value === 0;
    }
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Navabr
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </div>
    );
  }
}

export default App;
