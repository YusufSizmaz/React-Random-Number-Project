import React, { useState } from "react";
import "./components/text.css";
import { Button } from "@mantine/core";
import { Input } from "@mantine/core";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(9);

  const giveRandomNumber = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };
  return (
    <MantineProvider>
      <div className="hero">
        <div className="container">
          <div className="randomNum">
            <p>
              Random Number : <span>{randomNum}</span>
            </p>
          </div>

          <div>
            <p>Minimum :</p>
            <Input
              size="md"
              radius="md"
              placeholder="Input component"
              type="number"
              value={minVal}
              onChange={(e) => setMinVal(+e.target.value)}
            />
          </div>

          <div>
            <p>Maximim : </p>
            <Input
              size="md"
              radius="md"
              type="number"
              placeholder="Input component"
              value={maxVal}
              onChange={(e) => setMaxVal(+e.target.value)}
            />
          </div>

          <div>
            <Button
              onClick={giveRandomNumber}
              variant="gradient"
              gradient={{ from: "blue", to: "rgba(255, 0, 0, 1)", deg: 90 }}
              size="lg"
            >
              Sayı Üret
            </Button>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
