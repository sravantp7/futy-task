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
    <div className={styles.search}>
      {openSearch ? (
        <form className={styles.searchBox} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value.toUpperCase())}
            placeholder="Search team here ..."
          />
          <IoIosClose
            size={"2rem"}
            onClick={toggleSearch}
            className={styles.searchClose}
          />
        </form>
      ) : (
        <IoIosSearch
          size="3rem"
          onClick={toggleSearch}
          className={styles.searchIcon}
        />
      )}
    </div>
  );
}
