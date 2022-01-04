import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
  };
  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
  };
  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(state => {
      const values = Object.values(state);
      let total = 0;
      for (let value of values) {
        total = total + value;
      }
      console.log(total);
      return total;
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          onGood={this.goodIncrement}
          onNeutral={this.neutralIncrement}
          onBad={this.badIncrement}
        />

        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          // positivePercentage={this.state}
        />
      </div>
    );
  }
}
export default Feedback;
