import React, { useState } from 'react';
import s from './App.module.css';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const BUTTONS = {
  Good: 'good',
  Neutral: 'neutral',
  Bad: 'bad',
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedBack = event => {
    const { name } = event.target;

    switch (name) {
      case BUTTONS.Good:
        setGood(good => good + 1);
        break;
      case BUTTONS.Neutral:
        setNeutral(neutral => neutral + 1);
        break;
      case BUTTONS.Bad:
        setBad(bad => bad + 1);
        break;

      default:
        throw new Error();
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  const totalFeedback = countTotalFeedback();

  function countPositiveFeedbackPercentage() {
    return Math.ceil((good * 100) / totalFeedback);
  }

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.values(BUTTONS)}
          onLeaveFeedback={onLeaveFeedBack}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistic
            className={s.count}
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification className={s.count} message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
