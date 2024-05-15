import Menu from "./components/menu/MenuIndex";

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Football"];

  return (
    <Menu>
      <Menu.Toggle>sports</Menu.Toggle>
      <Menu.Dropdown>
        {sports.map((sport) => (
          <Menu.Item key={sport}>{sport}</Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
