import { useState } from "react";
import reactLogo from "../assets/react.svg";
import "./App.css";

import Description from "./Description/Description";
import Option from "./Option/Option";
import Feedback from "./Feedback/Feedback";

const App = () => {
  const [views, setViews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setViews((views) => ({
      ...views,
      [feedbackType]: views[feedbackType] + 1,
    }));
  };

  const total = views.good + views.neutral + views.bad;

  const resetFeedback = () => {
    setViews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        total={total}
        resetFeedback={resetFeedback}
      />
      <Feedback {...views} total={total} />
    </>
  );
};

export default App;
