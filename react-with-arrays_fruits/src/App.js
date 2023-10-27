import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "Strawberry", color: "Red" },
    { id: 1, name: "Passion Fruit", color: "Yellow" },
    { id: 2, name: "Kiwi", color: "Brown" },
    { id: 3, name: "Water Melon", color: "Green" },
    { id: 4, name: "Orange", color: "Orange" },
  ];

  return (
    // <div className="app">
    //   <Card name="🍌 banana" />
    // </div>

    <ul className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} fruitColor={fruit.color} />
      ))}
    </ul>
  );
}
