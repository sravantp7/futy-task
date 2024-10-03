import "./App.css";

import { useState } from "react";
import { DataContext } from "./components/context/DataContext";
import { upcomingMatches, liveMatches, completedMatches } from "./matches";

// Components
import Navbar from "./components/Navbar/Navbar";
import GameControls from "./components/GameControls/GameControls";
import GameStatus from "./components/GameStatus/GameStatus";
import Matches from "./components/Matches/Matches";

function App() {
  const [search, setSearch] = useState("");

  // State for storing the type of game that needed to display on the screen, upcoming, live or completed.
  const [select, setSelect] = useState("upcoming");

  // state for detecting scroll
  const [scroll, setScroll] = useState(false);

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        upcomingMatches,
        liveMatches,
        completedMatches,
        select,
        setSelect,
        scroll,
        setScroll,
      }}
    >
      <div className="App">
        <Navbar />
        <GameStatus />
        <Matches />
        <GameControls />
      </div>
    </DataContext.Provider>
  );
}

export default App;
