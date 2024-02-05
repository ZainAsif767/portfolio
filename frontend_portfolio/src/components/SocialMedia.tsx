import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    {/* <a href="https://twitter.com/comeflywithme92">
      <div>
        <BsTwitter />
      </div>
    </a> */}
    <a href="https://github.com/ZainAsif767">
      <div>
        <FaGithub />
      </div>
    </a>
    <a href="https://www.facebook.com/S.Zain.Asif">
      <div>
        <FaFacebookF />
      </div>
    </a>
    <a href="https://www.instagram.com/zain._.asif">
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/zainasif767/">
      <div>
        <FaLinkedinIn />
      </div>
    </a>
  </div>
);

export default SocialMedia;
