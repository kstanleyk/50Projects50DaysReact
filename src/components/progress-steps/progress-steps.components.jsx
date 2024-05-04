import React, { useCallback, useEffect, useState } from "react";

import "./progress-steps.styles.css";

function Step({ currentActive, num }) {
  return (
    <div className={`circle ${currentActive >= num ? "active" : ""}`}>
      {num}
    </div>
  );
}

function ProgressSteps({stepCount}) {
  const [currentActive, setCurrentActive] = useState(1);

  function generateNumbers(n) {
    const numbersArray = [];
    for (let i = 1; i <= n; i++) {
      numbersArray.push(i);
    }
    return numbersArray;
  }

  const update = useCallback(() => {
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

    let progressWidth = `${
      ((actives.length - 1) / (circles.length - 1)) * 100
    }%`;

    progress.style.width = progressWidth;

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
  }, [currentActive]);

  const handleNext = () => {
    setCurrentActive((prevActive) => {
      let nextActive = prevActive + 1;
      if (nextActive > stepCount) {
        nextActive = stepCount;
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

  useEffect(() => {
    update();
  }, [currentActive, update]);

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        {generateNumbers(stepCount).map((num) => (
          <Step currentActive={currentActive} num={num} key={num} />
        ))}
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
        disabled={currentActive === stepCount}
      >
        Next
      </button>
    </div>
  );
}

export default ProgressSteps;
