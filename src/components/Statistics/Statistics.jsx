

const Statistics = ({good, neutral, bad, total, percent}) => (
<section>
<ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
</ul>
<div>
      <p>Total: {total}</p>
      <p>PositivePercentage: {percent}%</p>
</div>
</section>
);
    
export default Statistics