import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./footer.css";
import { TextAny } from "../../language/langTexts";

const Footer = () => {
  return (
    <div className="cv__footer">
      <div className="cv__footer_title">
        <p>
          <TextAny text="footer" />
        </p>
      </div>
      <div className="cv__footer_authors">
        <AiFillStar color="#fff" size={14} />
        <a href="https://github.com/WojK">Wojciech Kudełko</a>
        <AiFillStar color="#fff" size={14} />
        <a href="https://github.com/MichalZdanuk">Michał Żdanuk</a>
        <AiFillStar color="#fff" size={14} />
        <a href="https://github.com/Smoleckk">Kamil Smołecki</a>
        <AiFillStar color="#fff" size={14} />
        <a href="https://github.com/Kuba072002">Jakub Szczygielski</a>
        <AiFillStar color="#fff" size={14} />
        <a href="https://github.com/morozm">Miłosz Moroz</a>
      </div>
    </div>
  );
};

export default Footer;
