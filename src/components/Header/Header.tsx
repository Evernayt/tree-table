import IconButton from "../UI/IconButton/IconButton";
import { allIcon, backIcon } from "../../icons";
import styles from "./Header.module.scss";
import NavButton from "./NavButton/NavButton";

const Header = () => {
  return (
    <div className={styles.container}>
      <IconButton icon={allIcon} />
      <IconButton icon={backIcon} />
      <NavButton text="Просмотр" isActive />
      <NavButton text="Управление" />
    </div>
  );
};

export default Header;
