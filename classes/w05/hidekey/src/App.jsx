import "./App.css";
import Bitcoin from "./bitcoin/Bitcoin";
import Context from "./context/Context";
import Counter from "./reducer/Counter";
import Drill from "./drill/Drill";
import TV from "./tv/TV"

//? VITE
const API_KEY = import.meta.env.VITE_API_KEY
//? CRA
const SECRET = process.env.REACT_APP_SECRET
function App() {
  return (
    <div className="App">
      {API_KEY}
      <Counter />
    </div>
  );
}

export default App;
