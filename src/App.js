import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./data/islands";

function App() {
  const [islandsState, setIslandsState] = useState(islands);
  const [island, setIsland] = useState({
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  });

  const incVisitors = (id) => {
    let newIslands = islandsState;
    newIslands = islandsState.find((island) => island.id === id);
    newIslands.visitors = newIslands.visitors + 1;
    setIslandsState(newIslands);
  };

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} islandsState={islandsState} />
        <IslandForm island={island} incVisitors={incVisitors} />
      </div>
    </div>
  );
}

export default App;
