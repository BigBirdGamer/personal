import { Outlet } from "react-router-dom";

function Home() {
    // const [tv, setTv] = useState()
    return (
        <>
            <h1>TVMaze react</h1>
            <Outlet />
        </>
    )
}

export default Home;