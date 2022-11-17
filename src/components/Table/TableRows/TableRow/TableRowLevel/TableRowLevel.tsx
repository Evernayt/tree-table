import { FC } from "react";
import TableRowIcons from "./TableRowIcons/TableRowIcons";
import styles from "./TableRowLevel.module.scss";
import TableRowTree from "./TableRowTree/TableRowTree";

export interface IRowLevel {
  parentId: number | null;
  level: number;
  isLastChild: boolean;
  isSingleParent: boolean;
}

interface TableRowLevelProps extends IRowLevel {
  id: number;
  childCount: number;
}

const TableRowLevel: FC<TableRowLevelProps> = ({
  id,
  parentId,
  childCount,
  level,
  isLastChild,
  isSingleParent,
}) => {
  return (
    <div className={styles.container} style={{ marginLeft: `${level * 19}px` }}>
      <TableRowIcons id={id} parentId={parentId} level={level} />
      <TableRowTree
        childCount={childCount}
        level={level}
        isLastChild={isLastChild}
        isSingleParent={isSingleParent}
      />
    </div>
  );
};

export default TableRowLevel;
