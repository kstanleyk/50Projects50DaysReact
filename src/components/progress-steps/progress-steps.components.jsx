import React, { useState } from "react";

import './progress-steps.styles.css'

function ProgressSteps() {
  const [currentActive, setCurrentActive] = useState(1);

  const update = () => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, idx) => {
      if (idx < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });

    const actives = document.querySelectorAll(".active");
    const progress = document.getElementById("progress");
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  };

  const handleNext = () => {
    setCurrentActive((prevActive) => {
      let nextActive = prevActive + 1;
      if (nextActive > 4) {
        nextActive = 4;
      }
      return nextActive;
    });
    update();
  };

  const handlePrev = () => {
    setCurrentActive((prevActive) => {
      let nextActive = prevActive - 1;
      if (nextActive < 1) {
        nextActive = 1;
      }
      return nextActive;
    });
    update();
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className={`circle ${currentActive >= 1 ? "active" : ""}`}>1</div>
        <div className={`circle ${currentActive >= 2 ? "active" : ""}`}>2</div>
        <div className={`circle ${currentActive >= 3 ? "active" : ""}`}>3</div>
        <div className={`circle ${currentActive >= 4 ? "active" : ""}`}>4</div>
      </div>
      <button
        className="btn"
        id="prev"
        onClick={handlePrev}
        disabled={currentActive === 1}
      >
        Prev
      </button>
      <button
        className="btn"
        id="next"
        onClick={handleNext}
        disabled={currentActive === 4}
      >
        Next
      </button>
    </div>
  );
}

export default ProgressSteps;
