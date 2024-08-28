import logo from "./logo.svg";
import "./App.css";

function Logo(props) {
  const userPic = <img src={logo} alt={props.hello} />;
  return userPic;
}

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      {/* rendering a component and sending a prop */}
      <Logo hello="hello prop" />
    </>
  );
}

export default App;
