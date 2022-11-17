import { FC } from "react";
import styles from "./TableRowTree.module.scss";

interface TableRowTreeProps {
  childCount: number;
  level: number;
  isLastChild: boolean;
  isSingleParent: boolean;
}

const TableRowTree: FC<TableRowTreeProps> = ({
  childCount,
  level,
  isLastChild,
  isSingleParent,
}) => {
  const leftUpClasses = [styles.left_up_lines];
  const leftDownClasses = [styles.left_down_lines];
  const rightUpClasses = [styles.right_up_lines];
  const rightDownClasses = [styles.right_down_lines];

  if (childCount > 0) rightDownClasses.push(styles.r_dl_right);

  if (level > 0) {
    rightUpClasses.push(styles.r_ul_bottom);
    rightUpClasses.push(styles.r_ul_left);
    !isLastChild && rightDownClasses.push(styles.r_dl_left);
  }

  if (!isSingleParent && level > 1) {
    leftUpClasses.push(styles.l_ul_left);
    leftDownClasses.push(styles.l_dl_left);
  }

  return (
    <div className={styles.line_boxes}>
      <div className={styles.line_box}>
        <div className={leftUpClasses.join(" ")} />
        <div className={leftDownClasses.join(" ")} />
      </div>
      <div className={styles.line_box}>
        <div className={rightUpClasses.join(" ")} />
        <div className={rightDownClasses.join(" ")} />
      </div>
    </div>
  );
};

export default TableRowTree;
