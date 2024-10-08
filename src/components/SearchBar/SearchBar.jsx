import styles from "./SearchBar.module.css";
import { useEffect, useRef, useState } from "react";
import { useData } from "../context/DataContext";

import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

// Sound
import clickSound from "../../sounds/button.wav";

export default function SearchBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const inputRef = useRef(null);
  const { search, setSearch } = useData();

  function toggleSearch() {
    new Audio(clickSound).play();

    // clear search when closing the searchbox
    if (openSearch) {
      setSearch("");
    }
    setOpenSearch((prev) => !prev);
  }

  useEffect(() => {
    // Add focus to input
    if (openSearch) {
      inputRef.current.focus();
    }
  }, [openSearch]);

  return (
    // <>
    //   <input
    //     type="text"
    //     name="search"
    //     id="search"
    //     className={`${styles.input} ${openSearch ? styles.openSearch : ""}`}
    //     value={search}
    //     onChange={(e) => setSearch(e.target.value.toUpperCase().trimStart())}
    //     placeholder="Search team here ..."
    //   />
    //   {openSearch ? (
    //     <IoIosClose
    //       size={"2rem"}
    //       onClick={toggleSearch}
    //       className={styles.searchClose}
    //     />
    //   ) : (
    //     <IoIosSearch
    //       size={"3rem"}
    //       onClick={toggleSearch}
    //       className={styles.search}
    //     />
    //   )}
    // </>
    <>
      <div
        className={`${styles.searchContainer} ${
          !openSearch ? styles.hide : ""
        }`}
      >
        <input
          type="text"
          value={search}
          ref={inputRef}
          onChange={(e) => setSearch(e.target.value.toUpperCase().trimStart())}
          placeholder="Search team here..."
        />
      </div>
      <IoIosClose
        size={"3rem"}
        onClick={toggleSearch}
        className={`${styles.cursor} ${!openSearch ? styles.hide : ""}`}
      />
      <IoIosSearch
        size={"3rem"}
        onClick={toggleSearch}
        className={`${styles.cursor} ${openSearch ? styles.hide : ""}`}
      />
    </>
  );
}
