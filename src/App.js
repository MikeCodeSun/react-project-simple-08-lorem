import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 0;
    }
    if (amount > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <main>
      <h1>Lorem Generator</h1>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="">Paragraph: </label>
        <input
          type="number"
          className="lorem-input"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generator
        </button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </main>
  );
}

export default App;
