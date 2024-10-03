import styles from "./GameControls.module.css";

import { FaUserAstronaut } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { TbScoreboard } from "react-icons/tb";

import { useData } from "../context/DataContext";

export default function GameControls() {
  const { scroll } = useData();

  return (
    <div className={`${styles.gamecontrols} ${scroll ? styles.hide : ""}`}>
      <div>
        <FaUserAstronaut size="4rem" />
      </div>
      <div>
        <IoMdFootball size={"4rem"} className={styles.active} />
      </div>
      <div>
        <TbScoreboard size={"5rem"} />
      </div>
      <div>
        <div>F</div>
      </div>
    </div>
  );
}
