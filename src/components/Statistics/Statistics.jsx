

const Statistics = ({onStatisticsGood, onStatisticsNeutral, onStatisticsBad}) => (

<ul>
      <li>Good: {onStatisticsGood}</li>
      <li>Neutral: {onStatisticsNeutral}</li>
      <li>Bad: {onStatisticsBad}</li>
</ul>
);
    
export default Statistics