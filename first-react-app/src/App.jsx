import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";

import Die from "./Die";

function App() {
  return (
    <>
      {/* <Greeter person="Sarai" from="Jesus" />
      <Greeter person="Natalia" from="Jesus" />
      <Greeter person="Natalia" from="Sarai" /> */}
      <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />
    </>
  );
}

export default App;
