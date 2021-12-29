import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.handleIncrement}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrement}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <span>
            <p>Good:</p>
            {this.state.good}
          </span>
          <span>
            <p>Neutral:</p>
            {this.state.neutral}
          </span>
          <span>
            <p>Bad:</p>
            {this.state.bad}
          </span>
        </div>
      </div>
    );
  }
}
export default Feedback;
