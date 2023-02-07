import PropTypes from 'prop-types';
import { Component } from 'react';
import Controls from './Controls'

class FeedbackCounter extends Component {
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
  }

    render() {
        return (
<div>
<Controls 
    onIncrementGood={this.handleIncrementGood}
    onIncrementNeutral={this.handleIncrementNeutral}
    onIncrementBad={this.handleIncrementBad}
/>

  <h3>Statistics</h3>
    <ul>
      <li>Good:<span>{this.state.good}</span></li>
      <li>Neutral:<span>{this.state.neutral}</span></li>
      <li>Bad:<span>{this.state.bad}</span></li>
    </ul>
</div>
    )
  }
};

export default FeedbackCounter;