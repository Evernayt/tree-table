import { FC, InputHTMLAttributes } from "react";
import styles from "./Textbox.module.scss";

interface TextboxProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
}

const Textbox: FC<TextboxProps> = ({ value, ...props }) => {
  return (
    <input
      className={styles.textbox}
      {...props}
      value={value}
      style={{ width: `${(value.toString().length + 1) * 8}px` }}
    />
  );
};

export default Textbox;
