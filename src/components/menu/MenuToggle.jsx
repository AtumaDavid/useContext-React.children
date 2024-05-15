/* eslint-disable react/prop-types */
import React from "react";
import ToggleButton from "../toggle/ToggleButton";
import { MenuContext } from "./Menu";

export default function MenuToggle({ children }) {
  const { toggle } = React.useContext(MenuContext);
  return <ToggleButton onClick={toggle}>{children}</ToggleButton>;
}
