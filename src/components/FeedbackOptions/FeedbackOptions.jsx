import css from './Feedback.module.css';

const Controls = ({ options, onLeaveFeedback }) => (
    <ul className={css.feedbackList}>
    {options.map((options => (
      <li key={options}>
        <button type="button" onClick={() => onLeaveFeedback(options)}>
          {options}
        </button>
      </li>
    ))
    )}
  </ul>
  );


export default Controls;