import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./footer.css";
import { TextAny } from "../../language/langTexts"

const Footer = () => {
  return (
    <div className="cv__footer">
      <div className="cv__footer_title">
        <p><TextAny text="footer" /></p>
      </div>
      <div className="cv__footer_authors">
        <AiFillStar color="#fff" size={14} />
        <p>Wojciech Kudełko</p>
        <AiFillStar color="#fff" size={14} />
        <p>Michał Żdanuk</p>
        <AiFillStar color="#fff" size={14} />
        <p>Miłosz Moroz</p>
        <AiFillStar color="#fff" size={14} />
        <p>Jakub Szczygielski</p>
        <AiFillStar color="#fff" size={14} />
        <p>Kamil Smołecki</p>
      </div>
    </div>
  );
};

export default Footer;
