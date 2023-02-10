

const Statistics = ({good, neutral, bad, total, percent}) => (

<ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li><p>Total: {total}</p></li>
      <li><p>PositivePercentage: {percent}%</p></li>
</ul>
);
    
export default Statistics