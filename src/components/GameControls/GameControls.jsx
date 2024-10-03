import styles from "./GameControls.module.css";

import { FaUserAstronaut } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { TbScoreboard } from "react-icons/tb";
import { RiMoneyPoundCircleLine } from "react-icons/ri";

export default function GameControls() {
  return (
    <div className={styles.gamecontrols}>
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
        <RiMoneyPoundCircleLine size={"5rem"} />
      </div>
    </div>
  );
}
