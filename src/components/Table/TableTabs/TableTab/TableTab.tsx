import { FC } from "react";
import styles from "./TableTab.module.scss";

interface TableTabProps {
  name: string;
}

const TableTab: FC<TableTabProps> = ({ name }) => {
  return <div className={styles.tab}>{name}</div>;
};

export default TableTab;
