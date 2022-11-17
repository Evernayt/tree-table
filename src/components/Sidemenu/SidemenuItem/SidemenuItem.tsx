import { FC, HTMLAttributes } from "react";
import { layoutIcon } from "../../../icons";
import styles from "./SidemenuItem.module.scss";

interface SidemenuItemProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  isActive?: boolean;
}

const SidemenuItem: FC<SidemenuItemProps> = ({ name, isActive, ...props }) => {
  return (
    <div
      className={[styles.container, isActive && styles.active].join(" ")}
      {...props}
    >
      <img src={layoutIcon} />
      <div>{name}</div>
    </div>
  );
};

export default SidemenuItem;
