import Menu from "./components/menu/MenuIndex";
import Toggle from "./components/toggle/index";

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Football"];

  return (
    <Toggle>
      <Menu>
        <Toggle.Button>
          <Menu.Toggle>sports</Menu.Toggle>
        </Toggle.Button>
        <Toggle.On>
          <Menu.Dropdown>
            {sports.map((sport) => (
              <Menu.Item key={sport}>{sport}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Toggle.On>
      </Menu>
    </Toggle>
  );
}
