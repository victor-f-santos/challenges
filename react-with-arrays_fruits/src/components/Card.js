import "./Card.css";

export default function Card({ name, fruitColor }) {
  return (
    <p className="card" style={{ backgroundColor: fruitColor }}>
      {name} - {fruitColor}
    </p>
  );
}
