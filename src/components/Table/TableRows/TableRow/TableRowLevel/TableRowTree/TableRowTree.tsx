import { FC } from "react";
import styles from "./TableRowTree.module.scss";

interface TableRowTreeProps {
  childCount: number;
  childChildsCount: number;
  level: number;
}

const TableRowTree: FC<TableRowTreeProps> = ({
  childCount,
  childChildsCount,
  level,
}) => {
  const lineClasses = [styles.line_box];

  if (level > 0) {
    lineClasses.push(styles.h_line);
  }

  if (childCount > 0) {
    lineClasses.push(styles.v_line);
  }

  const childTotalCount = childCount + childChildsCount;

  return (
    <div
      className={lineClasses.join(" ")}
      style={{ height: `${childTotalCount * 60}px` }}
    />
  );
};

export default TableRowTree;
