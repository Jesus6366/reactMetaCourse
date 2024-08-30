import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";

import Die from "./Die";

import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";

import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";

import Counter from "./Counter";

import Toggler from "./Toggler";

import ColorBox from "./ColorBox";

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <>
      <ColorBox
        colors={[
          "#e46535",
          "#9c27b0",
          "#679ab7",
          "#e53935",
          "#54a9f4",
          "#009688",
          "#e5503b",
          "#d953b4",
          "#68a1c0",
          "#e5492b",
          "#4b8bf4",
          "#00a79d",
          "#e64a36",
          "#a34e9b",
          "#4a9ac7",
          "#e54a2a",
          "#009e8b",
          "#e56036",
          "#9c1b6d",
          "#68a0b7",
          "#e5512c",
          "#00a99d",
          "#e55137",
          "#54a6f8",
          "#00796b",
        ]}
      />
      {/* <Toggler /> */}
      {/* {<Counter />} */}
      {/* <Clicker message="Please Stop Clicking Me!" buttonText="Do not click" /> */}
      {/* <PropertyList properties={properties} /> */}
    </>
  );
}

export default App;
