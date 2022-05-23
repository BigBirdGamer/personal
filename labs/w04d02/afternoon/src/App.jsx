import { useState } from "react";
import "./App.css";
import bulbData from "./bulbData";
import Bulb from "./Bulb";



function App() {
  const [color, setColor] = useState({color:"black" , id: ""});
     const stopFunction =()=>{
       setColor({color:"red" , id: "stop"})
      
       }
       const slowFunction =()=>{
        setColor({color:"yellow" , id: "slow"})
      }

      const goFunction =()=>{
        setColor({color:"green" , id: "go"} )
      }

  return (
    <div className="App">
      <section>
        <div id="control-panel">
          <h2 onClick={stopFunction} id="stop" className="button">
            Stop
          </h2>
          <h2 onClick={slowFunction} id="slow" className="button">
            Slow
          </h2>
          <h2 onClick={goFunction} id="go" className="button">
            Go
          </h2>
        </div>
        <div id="traffic-lights">
          {bulbData.map((element, index) => {
            return (
              <Bulb
                Stop={element.Stop}
                Slow={element.Slow}
                Go={element.Go}
                key={index} color={color} id={element.id}
              />
            );
          })}


        </div>
      </section>
    </div>
  );
}

export default App;
