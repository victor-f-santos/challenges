import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Sarah" />
      <Greeting name="Jan" />
      <Greeting name="Victor" />
      <Greeting name="Marcell" />
    </div>
  );
}

function Greeting({ name }) {
  return <p>Hi {name === "Jan" || name === "Marcell" ? ", Coach!" : name}</p>;
}
