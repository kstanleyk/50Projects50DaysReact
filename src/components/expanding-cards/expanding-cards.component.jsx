import React, { useState } from "react";

import "./expanding-cards.styles.css";

const initialPanels = [
  {
    backgroundImg:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Explore The World",
    isActive: true,
  },
  {
    backgroundImg:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Wild Forest",
    isActive: false,
  },
  {
    backgroundImg:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    title: "Sunny Beach",
    isActive: false,
  },
  {
    backgroundImg:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    title: "City on Winter",
    isActive: false,
  },
  {
    backgroundImg:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    title: "Mountains - Clouds",
    isActive: false,
  },
];

function Panel({ backgroundImg, title, isActive, onClick }) {
  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
      onClick={onClick}
    >
      <h3>{title}</h3>
    </div>
  );
}

function PanelContainer() {
  const [panels, setPanels] = useState(initialPanels);

  const handlePanelClick = (index) => {
    const newPanels = panels.map((panel, i) => {
      return {
        ...panel,
        isActive: i === index ? true : false,
      };
    });
    setPanels(newPanels);
  };

  return (
    <div className="container">
      {panels.map((panel, index) => (
        <Panel
          key={index}
          backgroundImg={panel.backgroundImg}
          title={panel.title}
          isActive={panel.isActive}
          onClick={() => handlePanelClick(index)}
        />
      ))}
    </div>
  );
}

export default PanelContainer;
