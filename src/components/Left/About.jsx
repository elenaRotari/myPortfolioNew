import "./About.scss";
import CircularBar from "./CircularBar.jsx";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { ImXing } from "react-icons/im";
import SkillsBar from "./SkillsBar.jsx";
import data from "../../data/data.json";

export default function About() {
  return (
    <div className="about">
      <div className="imgBlock">
        <div className="img"></div>
        <p>Fullstack Web Developer </p>
      </div>
      <div className="contacts">
        <h3>{data.superContacts}</h3>
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
            <p className="phone">+49(0)151 14796431</p>
          </div>
        </div>
      </div>
      <div className="language">
        <h3> {data.superLanguage}</h3>
        <div className="bar">
          {data.languages.map((item, idx) => (
            <CircularBar
              key={idx}
              percentage={item.percentage}
              language={item.language}
            />
          ))}
        </div>
      </div>
      <div className="skills">
        <h3>{data.superSkills}</h3>
        <div className="skillsBar">
          {data.skillsData.map((item, idx) => (
            <SkillsBar key={idx} completed={item.completed} text={item.text} />
          ))}
        </div>
      </div>
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
