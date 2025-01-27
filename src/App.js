import React, { useState } from "react";
import "./components/text.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(9);

  const giveRandomNumber = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number : <span>{randomNum}</span>
          </p>
        </div>

        <div>
          <p>Min:</p>
          <input
            type="number"
            value={minVal}
            onChange={(e) => setMinVal(+e.target.value)}
          />
        </div>

        <div>
          <p>Max: </p>
          <input
            type="number"
            value={maxVal}
            onChange={(e) => setMaxVal(+e.target.value)}
          />
        </div>

        <div>
          <Button color="success" onClick={giveRandomNumber}>
            Get Random Number
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
