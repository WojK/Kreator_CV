import React from "react";
import { LangContext } from "./lang";

export function TextAny(props) {
  let { tr } = React.useContext(LangContext);
  return tr(props.text);
}
