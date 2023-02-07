// import PropTypes from 'prop-types';
// import { Component } from 'react';

const Controls = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (

    <div>
        <h2>Please leave feedback</h2>
        <div>
            <button type='button' onClick={onIncrementGood}>Good</button>
            <button type='button' onClick={onIncrementNeutral}>Neutral</button>
            <button type='button' onClick={onIncrementBad}>Bad</button>
        </div>
    </div>
);


export default Controls;