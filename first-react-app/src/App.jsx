import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";

import Die from "./Die";

import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";

import ColorList from "./ColorList";
import Slots from "./Slots";

function App() {
  return (
    <>
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍌" val3="🍒" />
      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["orangeRed", "olive", "slategrey"]} /> */}
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
