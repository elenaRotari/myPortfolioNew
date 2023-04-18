import "./Home.scss";
import img from "../assets/logo2.png";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function Home() {
  // const navigator = useNavigate();

  return (
    <div className="home" id="projects">
      <div className="homeContainer">
        <img src={img} alt="logo" />
      </div>
      <div className="title">
        <h2>{data.superProjects}</h2>
      </div>
      <div className="services">
        <div className="homeBlock">
          {data.projects.map((item, idx) => (
            <div className="cards">
              <h3 key={idx}>{item.titel}</h3>
              <p>{item.described}</p>
              <a
                href={item.src}
                target="_blank"
                style={{
                  color: "#efc641",
                  fontSize: "13.28px",
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                Show Now →
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
