import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={false} />;
}

function Smiley({ isHappy }) {
  return <p>{isHappy ? "Alright" : "Bleh"}</p>;
}
