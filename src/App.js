import { useState } from "react";
import "./styles.css";

export default function App() {
  let customStyle = {
    ptagStyle: {
      display: "block",
      margin: "1rem"
    },
    h1Style: {
      display: "block",
      "font-size": "2em",
      "margin-block-start": "0.67em",
      "margin-block-end": "0.67em",
      "margin-inline-start": "0px",
      "margin-inline-end": "0px",
      "font-weight": "bold"
    },
    h2Style: {
      display: "block",
      fontSize: "1.5em",
      "margin-block-start": "0.83em",
      "margin-block-end": "0.83em",
      "margin-inline-start": "0px",
      "margin-inline-end": "0px",
      "font- weight": "bold"
    },
    h3Style: {
      display: "block",
      "font-size": "1.17em",
      "margin-block-start": "1em",
      "margin-block-end": "1em",
      "margin-inline-start": "0px",
      "margin-inline-end": "0px",
      "font-weight": "bold"
    }
  };
  const [initValue, getValue] = useState("");
  const [initSTyle, getStyle] = useState(customStyle.ptagStyle);
  const [initCustomStyle, getinitStyle] = useState(0);

  return (
    <div className="todoapp stack-large">
      <input value={initValue} onChange={(e) => getValue(e.target.value)} />
      <p
        className={
          initCustomStyle === 0
            ? ""
            : initCustomStyle === 1
            ? "h1css"
            : initCustomStyle === 2
            ? "h2css"
            : initCustomStyle === 3
            ? "h3css"
            : ""
        }
        style={initSTyle}
      >
        {initValue}
      </p>

      <p>First Way **</p>
      <p>
        If You try first approach then the second 3 buttons will not work
        because it's a inline css
      </p>
      <br></br>
      <button onClick={() => getStyle(customStyle.h1Style)}>h1</button>
      <button onClick={() => getStyle(customStyle.h2Style)}>h2</button>
      <button onClick={() => getStyle(customStyle.h3Style)}>h3</button>
      <br></br>
      <p>Second Way </p>
      <button onClick={() => getinitStyle(1)}>h1</button>
      <button onClick={() => getinitStyle(2)}>h2</button>
      <button onClick={() => getinitStyle(3)}>h3</button>
    </div>
  );
}
