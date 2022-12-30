import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CircularBar.scss";

export default function CircularBar({ percentage, language }) {
  return (
    <div className="circularBar">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0.25,

          strokeLinecap: "butt",

          textSize: "18px",

          pathTransitionDuration: 0.5,

          pathColor: `rgba(242, 190, 21)`,
          textColor: "white",
          trailColor: "white",
          backgroundColor: "#3e98c7",
        })}
      />
      <p style={{ color: "white", fontSize: "0.9rem" }}>{language}</p>
    </div>
  );
}
