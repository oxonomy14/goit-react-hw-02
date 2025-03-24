import css from "./Option.module.css";

const Option = ({ updateFeedback }) => {
  return (
    <div className={css.OptionButtons}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
    </div>
  );
};

export default Option;
