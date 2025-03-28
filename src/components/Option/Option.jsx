import css from "./Option.module.css";

const Option = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.OptionButtons}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Option;
