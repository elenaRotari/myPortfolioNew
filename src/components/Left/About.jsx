import "./About.scss";
import CircularBar from "./CircularBar.jsx";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { ImXing } from "react-icons/im";
import SkillsBar from "./SkillsBar.jsx";
import data from "../../data/data.json";
import cv from "../assets/Lebenslauf_ElenaRotari.pdf";

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
            <p>{data.contacts1[0]}</p>
            <p>{data.contacts1[3]}</p>
          </div>
          <div className="grid">
            <p>{data.contacts1[1]}</p>
            <p>{data.contacts1[4]}</p>
          </div>
          <div className="grid">
            <p>{data.contacts1[2]}</p>
            <p className="phone">{data.contacts1[5]}</p>
          </div>
          <div className="grid">
            <p>{data.contacts1[6]}</p>
            <p>
              <a
                href={cv}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                {data.contacts1[7]}
              </a>
            </p>
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
