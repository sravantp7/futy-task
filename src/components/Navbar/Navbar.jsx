import styles from "./Navbar.module.css";

import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";

// Sound
import clickSound from "../../sounds/button.wav";
import { useData } from "../context/DataContext";

export default function Navbar() {
  // State for toggling the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scroll } = useData();

  function toggleMenu() {
    // Playing sound effect when clicking the hamburger menu
    new Audio(clickSound).play();
    // Adding vibration
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className={`${styles.header}`}>
      {/* Leftside of the navigationbar */}
      <div className={styles.leftContainer}>
        <FaUserCircle size="3.5rem" />
        <div className={styles.points}>
          <div>F</div>
          <div>50</div>
        </div>
      </div>

      {/* Rightside of the navigation bar  */}
      <div className={styles.rightContainer}>
        <SearchBar />
        <div onClick={toggleMenu} className={styles.hamburger}>
          <FiAlignJustify size="4rem" />
        </div>
      </div>

      <div
        className={`${styles.hamburgerMenu} ${
          isMenuOpen ? "" : styles["hamburgerMenu--hide"]
        }`}
      >
        <div>
          <Logo />
          <div onClick={toggleMenu} className={styles.hamburger}>
            <IoMdClose size="4rem" />
          </div>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Matches</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className={styles.options}>
          <div>
            <RiCustomerService2Line size={"3rem"} />
          </div>
          <div>How to play</div>
        </div>
      </div>
    </header>
  );
}
