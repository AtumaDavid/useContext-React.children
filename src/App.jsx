import Menu from "./components/menu/Menu";
import MenuToggle from "./components/menu/MenuToggle";
import MenuDropdown from "./components/menu/MenuDropdown";
import MenuItem from "./components/menu/MenuItem";

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Football"];

  return (
    <Menu>
      <MenuToggle>sports</MenuToggle>
      <MenuDropdown>
        {sports.map((sport) => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
}
