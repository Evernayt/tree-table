import { dropIcon } from "../../../icons";
import IconButton from "../../UI/IconButton/IconButton";
import styles from "./SidemenuHeader.module.scss";

const SidemenuHeader = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>Название проекта</div>
        <div className={styles.description}>Аббревиатура</div>
      </div>
      <IconButton icon={dropIcon} />
    </div>
  );
};

export default SidemenuHeader;
