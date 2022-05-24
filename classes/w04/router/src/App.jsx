import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

const Top = () => {
    const anything = useParams();
    console.log(anything)
    return (
        <p>{anything.name} Page <Link to="/game">Game</Link></p>
    )
}

const Game = () => {
    const navigate = useNavigate()
    return (
        <p>Game Page <button onClick={() => navigate("/top")}>Go Top</button></p>
    ) 
}

function Tutorial() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/top" element={<Top />}>
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Tutorial;
