import { useState } from "react";
import { Landing } from "./components/Landing";
import { Signin } from "./components/Signin";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Signin />
    </>
  );
}

export default App;
