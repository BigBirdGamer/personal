import { useState } from "react";
import Bulb from "./Bulb";
import bulbEvents from "./bulbData";
import "./App.css";

function TrafficLight() {
  const [key, setKey] = useState("Stop");

  const handleStop = () => {
    setKey("Stop");
  };

  const handleSlow = () => {
    setKey("Slow");
  };

  const handleGo = () => {
    setKey("Go");
  };

  return (
    <section>
      <div id="control-panel">
        <h2 id="stop" className="button" onClick={handleStop}>
          Stop
        </h2>
        <h2 id="slow" className="button" onClick={handleSlow}>
          Slow
        </h2>
        <h2 id="go" className="button" onClick={handleGo}>
          Go
        </h2>
      </div>
      <div id="traffic-lights">
        {Object.keys(bulbEvents).map((k) => (
          <Bulb colour={key === k ? bulbEvents[k] : "black"} />
        ))}
        {/* <Bulb colour={key === "Stop" ? bulbEvents[key] : "black"} />
        <Bulb colour={key === "Slow" ? bulbEvents[key] : "black"} />
        <Bulb colour={key === "Go" ? bulbEvents[key] : "black"} /> */}
      </div>
    </section>
  );
}

export default TrafficLight;
