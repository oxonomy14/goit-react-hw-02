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
    setViews((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Option updateFeedback={updateFeedback} />
      <Feedback {...views} />
    </>
  );
};

export default App;
