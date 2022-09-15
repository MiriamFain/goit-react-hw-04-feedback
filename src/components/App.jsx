import React, { Component } from 'react';
import s from './App.module.css';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = state => {
    this.setState(prevState => ({
      [state.target.name]: prevState[state.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedBack}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistic
              className={s.count}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification className={s.count} message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
