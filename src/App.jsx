import { Component } from 'react';

import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addNewFeedback = option => {
    console.log(option);
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedbacks = () => {
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  };

  countPositiveFeedbackPercentage = totalFeedbacksOptional => {
    const totalFeedbacks = totalFeedbacksOptional ?? this.countTotalFeedbacks();
    const positiveFeedbacks = this.state.good;

    return Math.round((positiveFeedbacks / totalFeedbacks) * 100) || 0;
  };

  formStatistics = () => {
    const statistics = {
      ...this.state,
      total: this.countTotalFeedbacks(),
    };

    statistics.positiveFeedback = `${this.countPositiveFeedbackPercentage(
      statistics.total
    )}%`;

    return statistics;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addNewFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedbacks() ? (
            <Statistics {...this.formStatistics()} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
