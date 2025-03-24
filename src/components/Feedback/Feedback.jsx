import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total }) => {
  {
    /* const total = good + neutral + bad; */
  }

  if (total === 0) {
    return <p>No feedback yet</p>;
  }

  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div className={css.Feedback}>
      <h2>Statistic</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
