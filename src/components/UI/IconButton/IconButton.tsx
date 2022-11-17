import { HTMLAttributes, FC } from "react";
import styles from "./IconButton.module.scss";

interface IconButtonProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
  return (
    <div className={styles.button} {...props}>
      <img src={icon} />
    </div>
  );
};

export default IconButton;
