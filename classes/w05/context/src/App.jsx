import { createContext } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD.jsx"
import ComponentE from "./ComponentE"

export const DataContext = createContext();
console.log(DataContext);


const data = {
    name: "simon",
    salary: 3000,
    staff: true, 
}

function App() {
    return (
        <>
        <form>
            <fieldset></fieldset>
        </form>
        <DataContext.Provider value={data}>
            <h1>Context App</h1>
            <ComponentA>
                Hi testing // props.children
            </ComponentA>
        </DataContext.Provider>
        <hr />
        <ComponentD>
            <>
                <h3>ComponentE</h3>
                <ComponentA/>
                <ComponentE data={data.name} />
            </>
        </ComponentD>
        </>
    )
}

export default App;