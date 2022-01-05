import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  badIncrement = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = state => {
    const values = Object.values(state);
    let total = 0;
    for (let value of values) {
      total = total + value;
    }

    return total;
  };

  countPositiveFeedbackPercentage = state => {
    const values = Object.values(state);
    let a = 0;
    let b = 0;
    for (let value of values) {
      a = value.good * 100;
      b = a / value.total;
    }
    console.log(b);
    return b;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.goodIncrement}
            onNeutral={this.neutralIncrement}
            onBad={this.badIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
          />
        </Section>
      </div>
    );
  }
}
export default Feedback;
