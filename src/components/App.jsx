import { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

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
  
    this.setState(prevStategood => ({
      good: prevStategood.good +1,
    }));
  }
  handleIncrementNeutral = () => {
      this.setState(prevStateneutral => ({         
        neutral: prevStateneutral.neutral +1,               
    }));
  }
  handleIncrementBad = () => {
      this.setState(prevStatebad => ({
        bad: prevStatebad.bad +1,
    }));
  };
  
  render() {
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

  <Statistics
  onStatisticsGood={this.state.good}
  onStatisticsNeutral={this.state.neutral}
  onStatisticsBad={this.state.bad}
  />
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

