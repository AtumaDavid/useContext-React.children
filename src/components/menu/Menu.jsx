import React from "react";

const MenuContext = React.createContext();

// eslint-disable-next-line react/prop-types
export default function Menu({ children }) {
  const [open, setOpen] = React.useState(false);

  function toggle() {
    console.log("toggled");
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
