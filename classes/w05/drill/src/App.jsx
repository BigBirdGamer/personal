import { createContext, useRef, useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentE from "./components/ComponentE";

const avatarGeneric =
  'https://res.cloudinary.com/jkeohan/image/upload/v1601931025/avatar_wuijmx.png';
const avatarRobot =
  'https://res.cloudinary.com/jkeohan/image/upload/v1601989471/avatar-robot_iqcq4k.png';

export const DataContext = createContext() // { DataContext: { Provider: }}
console.log('App - DataContext', DataContext)


function App() {
    const [userData, setUserData] = useState({});
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = inputRef.current.value;
    setUserData({
      ...userData,
      avatar: url
    });
    inputRef.current.value = '';
  };

  return (
    <div className="App">
      <h2>React Context - useContext Hook</h2>
      <h3>This is Drill</h3>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="update avatar url" />
        <button>Submit</button>
      </form>
      <br />
      <DataContext.Provider value={userData}>
        <ComponentA  />
        <hr />
        <ComponentE userData={userData} />
      </DataContext.Provider>
    </div>
  );
}

export default App;