import styles from "./Matches.module.css";

// Context
import { useData } from "../context/DataContext";

// Icons
import { FaAngleRight } from "react-icons/fa6";
import { ImCoinEuro } from "react-icons/im";
import { useEffect, useRef } from "react";

export default function Matches() {
  const {
    search,
    upcomingMatches,
    liveMatches,
    completedMatches,
    select,
    scroll,
    setScroll,
  } = useData();

  const divRef = useRef(null);

  let filteredMatches;

  // setting matches based on the user selection of match type ie, upcoming, live, or completed
  if (select === "upcoming") {
    filteredMatches = upcomingMatches;
  } else if (select === "live") {
    filteredMatches = liveMatches;
  } else if (select === "completed") {
    filteredMatches = completedMatches;
  }

  if (search && search.length > 2) {
    filteredMatches = filteredMatches.filter((match) => {
      if (
        match.teamA.includes(search) ||
        match.teamB.includes(search) ||
        match.teamAName.toUpperCase().includes(search) ||
        match.teamBName.toUpperCase().includes(search)
      ) {
        return true;
      }
      return false;
    });
  }

  // Scroll handle functions
  function handleScroll() {
    setScroll(true);
  }

  function handleScrollEnd() {
    setTimeout(() => {
      setScroll(false);
    }, 360);
  }

  useEffect(() => {
    // Event handlers for detecting scrolling inside match container
    if (divRef.current) {
      divRef.current.addEventListener("scroll", handleScroll);
      divRef.current.addEventListener("scrollend", handleScrollEnd);
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("scroll", handleScroll);
        divRef.current.removeEventListener("scrollend", handleScrollEnd);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.container} ${scroll ? styles.full : ""}`}
      ref={divRef}
    >
      <div className={styles.content}>
        {select === "upcoming" &&
          filteredMatches.map((match) => (
            <GameCard match={match} key={match.matchId} />
          ))}

        {select === "live" &&
          filteredMatches.map((match) => (
            <MatchCard match={match} key={match.matchId} />
          ))}

        {select === "completed" &&
          filteredMatches.map((match) => (
            <MatchCard match={match} key={match.matchId} />
          ))}
      </div>
    </div>
  );
}

// Function for formatting date in string to js Date object
function formatDate(date) {
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  return { day, month };
}

// Component for rendering upcoming match cards
function GameCard({ match }) {
  const { teamA, teamB, teamAImg, teamBImg, date, points } = match;

  const matchDate = new Date(date);
  const { day, month } = formatDate(matchDate);

  const time = matchDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className={styles.gameContainer}>
      <div className={styles.matchPoint}>
        <div>F</div>
        <span>{points}</span> <FaAngleRight />
      </div>
      <div className={styles.game}>
        <div className={styles.team}>
          <img src={teamAImg} alt={teamA} width={"35rem"} height={"38rem"} />
          <div>{teamA}</div>
        </div>
        <div className={styles.matchDetails}>
          <div>
            {month.toUpperCase()} {day}
          </div>
          <div>{time}</div>
        </div>
        <div className={styles.team}>
          <img src={teamBImg} alt={teamB} width={"35rem"} height={"38rem"} />
          <div>{teamB}</div>
        </div>
      </div>
      <button>Join Game</button>
    </div>
  );
}

// Component for rendering Live and Completed match cards
function MatchCard({ match }) {
  const {
    teamA,
    teamB,
    teamAImg,
    teamBImg,
    points,
    date,
    scoreA,
    scoreB,
    status,
  } = match;

  let matchDate;

  if (status === "live") {
    matchDate = new Date();
  } else {
    matchDate = new Date(date);
  }
  const { day, month } = formatDate(matchDate);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.matchPoint}>
        <div>F</div>
        <span>{points}</span> <FaAngleRight />
      </div>
      <div className={styles.game}>
        <div className={styles.team}>
          <img src={teamAImg} alt={teamA} width={"35rem"} height={"38rem"} />
          <div>{teamA}</div>
        </div>
        <div className={styles.matchDetails}>
          <div>
            {month.toUpperCase()} {day}
          </div>
          <div className={styles.matchScore}>
            <div>{scoreA}</div>
            <div>:</div>
            <div>{scoreB}</div>
          </div>
        </div>
        <div className={styles.team}>
          <img src={teamBImg} alt={teamB} width={"35rem"} height={"38rem"} />
          <div>{teamB}</div>
        </div>
      </div>
      <button>{status === "live" ? "View Game" : "View Score"}</button>
    </div>
  );
}
