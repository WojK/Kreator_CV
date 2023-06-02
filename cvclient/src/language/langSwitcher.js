import { useContext } from "react";
import { LangContext } from "./lang";
import Poland from "../assets/images/poland_flag.png";
import England from "../assets/images/england_flag.png";
import classes from "./langSwitcher.module.css";

export function LangSwitcher(props) {
  let ctxLang = useContext(LangContext);

  const handleLangChange = (evt) => {
    ctxLang.setLang(evt.target.value);
  };
  return (
    <>
      {ctxLang.lang === "pl" ? (
        <button
          className={classes["language-button"]}
          onClick={handleLangChange}
          value="en"
        >
          POLSKI
        </button>
      ) : (
        <button
          className={classes["language-button"]}
          onClick={handleLangChange}
          value="pl"
        >
          ENGLISH
        </button>
      )}
    </>
  );
}
