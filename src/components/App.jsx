import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from './Notification/Notification';

class FeedBackCounter extends Component {
  static defaultProps = {
      initialValue: 0,
  };
      state = {
  
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
  
  };
  
  
  handleIncrementGood = () => {
  
    this.setState(prevState => ({
      good: prevState.good +1,
    }));
  }
  handleIncrementNeutral = () => {
      this.setState(prevState => ({         
        neutral: prevState.neutral +1,               
    }));
  }
  handleIncrementBad = () => {
      this.setState(prevState => ({
        bad: prevState.bad +1,
    }));
  };


  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
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

    return (
  <div>
  <Section title={'Please leave feedback'}>
  <FeedbackOptions 
      onIncrementGood={this.handleIncrementGood}
      onIncrementNeutral={this.handleIncrementNeutral}
      onIncrementBad={this.handleIncrementBad}
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
  </div>
    )
  }
};

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <FeedBackCounter/>
    </div>
  );
};

