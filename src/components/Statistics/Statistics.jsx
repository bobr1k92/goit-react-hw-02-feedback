import { 
      BsEmojiSmile, 
      BsEmojiNeutral, 
      BsEmojiFrown, 
      BsPercent, 
      BsEmojiLaughing 
} from "react-icons/bs";
import css from './statistics.module.css'

const Statistics = ({good, neutral, bad, total, percent}) => (

<ul className={css.statisticsList}>
      <li className={css.statisticsItem}>
        <span className={css.emodji}><BsEmojiSmile size={20}/></span> Good: {good}
      </li>
      <li className={css.statisticsItem}>
        <span className={css.emodji}><BsEmojiNeutral size={20}/></span> Neutral: {neutral}
      </li>
      <li className={css.statisticsItem}>
        <span className={css.emodji}><BsEmojiFrown size={20}/></span> Bad: {bad}
      </li>
      <li className={css.statisticsItem}>
        <span className={css.emodji}><BsPercent size={20}/></span> Total: {total}
      </li>
      <li className={css.statisticsItem}>
        <span className={css.emodji}><BsEmojiLaughing size={20}/></span> PositivePercentage: {percent}%
      </li>
</ul>
);

export default Statistics;
