// import { BsEmojiSmile, BsEmojiFrown, BsEmojiNeutral, BsEmojiLaughing, BsPercent } from "react-icons/bs";
import css from "./statistics.module.css"

const Statistics = ({good, neutral, bad, total, percent}) => (

<ul className={css.statisticsList}>
      <li> Good: {good}</li>
      <li> Neutral: {neutral}</li>
      <li> Bad: {bad}</li>
      <li> Total: {total}</li>
      <li> PositivePercentage: {percent}%</li>
</ul>
);

export default Statistics;