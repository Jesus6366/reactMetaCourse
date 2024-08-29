import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";

import Die from "./Die";

import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";

function App() {
  return (
    <>
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      {/* <Greeter person="Sarai" from="Jesus" />
      <Greeter person="Natalia" from="Jesus" />
      <Greeter person="Natalia" from="Sarai" /> */}
      {/* <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} /> */}
      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} /> */}
    </>
  );
}

export default App;
