import React from "react";

export default function SkillsBar({ completed, text }) {
  const containerStyles = {
    height: 7,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#efc641",
    borderRadius: "inherit",
    textAlign: "right",
  };
  const textStyles = {
    color: "white",
    textAlign: "left",
  };

  const labelStyles = {
    color: "white",
  };
  const textContStyles = {
    width: `${completed}%`,
  };

  return (
    <div style={containerStyles} className="container">
      <div style={fillerStyles} className="filler"></div>
      <div className="textCont" style={textContStyles}>
        <p style={textStyles} className="text">
          {text}
        </p>
        <p style={labelStyles} className="label">{`${completed}%`}</p>
      </div>
    </div>
  );
}
