import React, { Component } from "react";

class Navabr extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar{" "}
            <span className='badge rounded-pill bg-secondary'>
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navabr;
