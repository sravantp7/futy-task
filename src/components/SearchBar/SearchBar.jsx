import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useData } from "../context/DataContext";

import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

// Sound
import clickSound from "../../sounds/button.wav";

export default function SearchBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const { search, setSearch } = useData();

  function toggleSearch() {
    new Audio(clickSound).play();
    setOpenSearch((prev) => !prev);
  }

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        className={`${styles.input} ${openSearch ? styles.openSearch : ""}`}
        value={search}
        onChange={(e) => setSearch(e.target.value.toUpperCase().trimStart())}
        placeholder="Search team here ..."
      />
      {openSearch ? (
        <IoIosClose
          size={"2rem"}
          onClick={toggleSearch}
          className={styles.searchClose}
        />
      ) : (
        <IoIosSearch
          size={"3rem"}
          onClick={toggleSearch}
          className={styles.search}
        />
      )}
    </>
  );
}
