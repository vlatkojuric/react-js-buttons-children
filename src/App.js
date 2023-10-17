import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>AAA</Button>
      <Button>Push it</Button>
      <Button>push it</Button>
      <Button>real good</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
