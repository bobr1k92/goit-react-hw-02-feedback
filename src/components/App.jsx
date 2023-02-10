import { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'components/GlobalContainer';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics'
import Notification from 'components/Notification';

class FeedBackCounter extends Component {

  static defaultProps = {
      initialValue: 0,
  };

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    message: PropTypes.string.isRequired,
    total: PropTypes.func.isRequired,
    percent: PropTypes.func.isRequired,
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

