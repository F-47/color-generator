import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  let [color, setColor] = useState("");
  let [err, setErr] = useState(false);
  let [list, setList] = useState(new Values("#f15025").all(5));

  function submitHandler(e) {
    e.preventDefault();

    try {
      let colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      setErr(true);
    }
  }
  

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={submitHandler}>
          <input
            className={err ? "error" : null}
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
