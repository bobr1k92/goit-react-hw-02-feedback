import { Component } from 'react';
import Container from './GlobalContainer/global';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from './Notification/Notification';
import { logDOM } from '@testing-library/react';

class FeedBackCounter extends Component {

  static defaultProps = {
      initialValue: 0,
  };
      state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
  };


  onLeaveFeedback = (key) => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad} = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() !== 0 ? Math.round(
      (this.state.good / this.countTotalFeedback()) * 100) : 0;
  };

  render() {
    const { good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
  <Container>
  <Section title={'Please leave feedback'}>
  <FeedbackOptions 
    options={options}
    onLeaveFeedback={this.onLeaveFeedback}
  />
  </Section>
  <Section title={'Statistics'}> 
  {total !== 0 ? (<Statistics
  good={good}
  neutral={neutral}
  bad={bad}
  total={total}
  percent={percent}
  /> ) : (<Notification message={'There is no feedback'}/>
  )}
  </Section>
  </Container>
    );
  };
};

export const App = () => {
  return (
    <div>
      <FeedBackCounter/>
    </div>
  );
};

