import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
class Header extends React.Component {
  render() {
    return <h1>netflixroulette</h1>;
  }
}

class InputSearch extends React.PureComponent {
  render() {
    return (
      <div>
        <input type="text"></input>
        <button>Search</button>
      </div>
    );
  }
}

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => setCount((count) => count + 1);
  const handleDecrease = () => setCount((count) => count - 1);

  return (
    <>
      <button onClick={handleDecrease}>-</button>
      <div>{count}</div>
      <button onClick={handleIncrease}>+</button>
    </>
  );
};

const myApp = React.createElement(
  "div",
  { className: "container" },
  <Header />,
  <InputSearch />,
  <Counter />
);

const rootElement = document.getElementById("root");

ReactDOM.render(myApp, rootElement);
