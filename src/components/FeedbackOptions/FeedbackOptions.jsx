// const Controls = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => (
//     <div>
//         <button type='button' onClick={onIncrementGood}>Good</button>
//         <button type='button' onClick={onIncrementNeutral}>Neutral</button>
//         <button type='button' onClick={onIncrementBad}>Bad</button>
//     </div>
// );

const Controls = ({ options, onLeaveFeedback }) => (
    <ul>
    {options.map((options => (
      <li key={options}>
        <button type="button" name={options} onClick={() => onLeaveFeedback(options)}>
          {options}
        </button>
      </li>
    ))
    )}
  </ul>
  );


export default Controls;