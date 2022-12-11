import "./About.scss";
import CircularBar from "./CircularBar.jsx";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { ImXing } from "react-icons/im";

export default function About() {
  return (
    <div className="about">
      <div className="imgBlock">
        <div className="img"></div>
        <p>Fullstack Wev Developer </p>
      </div>
      <div className="contacts">
        <h3>Contacts</h3>
        <div className="tableList">
          <div className="grid">
            <p>Residence</p>
            <p>Germany</p>
          </div>
          <div className="grid">
            <p>City</p>
            <p>Berlin</p>
          </div>
          <div className="grid">
            <p>Phone</p>
            <p className="phone">+49(151) 1479 6431</p>
          </div>
        </div>
      </div>
      <div className="language">
        <h3> Languages</h3>
        <div className="bar">
          <CircularBar percentage={90} language={"Romanian"} />
          <CircularBar percentage={75} language={"German"} />
          <CircularBar percentage={70} language={"English"} />
          <CircularBar percentage={70} language={"Russian"} />
        </div>
      </div>
      <div className="skills"></div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/elena-rotari-45b330243/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/elenaRotari" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.xing.com/profile/Elena_Rotari2/cv" target="_blank">
          <ImXing />
        </a>
        <a href="https://www.instagram.com/ella_rotary/" target="_blank">
          <BsInstagram />
        </a>

        <a href="https://www.facebook.com/elena.rotary.16" target="_blank">
          <BsFacebook />
        </a>
      </div>
    </div>
  );
}
