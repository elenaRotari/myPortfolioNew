import "./Home.scss";
import img from "../assets/logo2.png";
import data from "../../data/data.json";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigator = useNavigate();
  return (
    <div className="home" id="home">
      <div className="homeContainer">
        <img src={img} alt="logo" />
      </div>
      <div className="title">
        <h2>{data.superTitel}</h2>
      </div>
      <div className="services">
        <div className="homeBlock">
          {data.home.map((item, idx) => (
            <div className="cards">
              <h3 key={idx}>{item.titel}</h3>
              <p>{item.described}</p>
              <h5 onClick={() => navigator("/contacts")}>Order Now → </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
