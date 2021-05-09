import React, {useState} from "react";
import "./style.css";
import {CSSTransition} from "react-transition-group";
import Emoji from "./Emoji";
import Footer from "./Footer";

export default function App() {
  const [enter, setEnter] = useState(false);
  return (
    <div className="App">
    <div style={{position: "absolute", top: 100, width: 350}}>
      <CSSTransition in={enter} timeout={300} classNames="transition-fade" unmountOnExit>
        <div className="box">
          <p>
            <Emoji symbol="👋" />{" "}
            Hi there!
          </p>
          <p>I'm an animated {`<div>`} built using {`<CSSTransition />`}.</p>
          <p>Click{" "}
            <span className="inline-btn">Exit</span>{" "}to watch me fade away.
          </p>
        </div>
      </CSSTransition>
      </div>
      <button style={{position: "absolute", bottom: 200}} onClick={() => setEnter((enter) => !enter)}>{enter ? "Exit" : "Enter"}</button>
      <Footer />
    </div>
  );
}
