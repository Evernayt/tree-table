import { FC } from "react";
import styles from "./NavButton.module.scss";

interface NavButtonProps {
  text: string;
  isActive?: boolean;
}

const NavButton: FC<NavButtonProps> = ({ text, isActive }) => {
  return (
    <div className={[styles.button, isActive && styles.active].join(" ")}>
      {text}
    </div>
  );
};

export default NavButton;
