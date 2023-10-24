import React from "react";
import "./styles.css";

export default function App() {
  return <Challenge3 />;
}

function Challenge3() {
  return (
    <article>
      <h2 className="article__title">This is an article with css.</h2>
      <form>
        <label htmlFor="apples">Do you like apples?</label>
        <input type="checkbox" name="apples" id="apples"></input>
      </form>
      <a className="article__link" href="https://en.wikipedia.org/wiki/Apple">
        Learn more about Apples
      </a>
    </article>
  );
}
