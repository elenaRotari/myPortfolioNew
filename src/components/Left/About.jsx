import "./About.scss";

import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { ImXing } from "react-icons/im";

export default function About() {
  return (
    <div className="about">
      <div className="imgBlock">
        <img src="" alt="" />
        <p>Fullstack Wev Developer </p>
      </div>
      <div className="bundesliga"></div>
      <div className="dfb"></div>
      <div className="legue"></div>
      <div className="iconsRbl">
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
