import { useData } from "../context/DataContext";

export default function GameStatus() {
  const { select, setSelect } = useData();

  return (
    <div className={`status`}>
      <div
        className={select === "upcoming" ? "selected" : ""}
        onClick={() => setSelect("upcoming")}
      >
        Upcoming
      </div>
      <div
        className={select === "live" ? "live selected" : "live"}
        onClick={() => setSelect("live")}
      >
        <div></div>
        <div>Live</div>
      </div>
      <div
        onClick={() => setSelect("completed")}
        className={select === "completed" ? "selected" : ""}
      >
        Completed
      </div>
    </div>
  );
}
