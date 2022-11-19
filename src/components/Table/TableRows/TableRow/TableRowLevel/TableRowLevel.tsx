import { FC } from "react";
import TableRowIcons from "./TableRowIcons/TableRowIcons";
import styles from "./TableRowLevel.module.scss";
import TableRowTree from "./TableRowTree/TableRowTree";

export interface IRowLevel {
  parentId: number | null;
  level: number;
}

interface TableRowLevelProps extends IRowLevel {
  id: number;
  childCount: number;
  childChildsCount: number;
}

const TableRowLevel: FC<TableRowLevelProps> = ({
  id,
  parentId,
  level,
  childCount,
  childChildsCount
}) => {
  return (
    <div className={styles.container} style={{ marginLeft: `${level * 19}px` }}>
      <TableRowIcons id={id} parentId={parentId} level={level} />
      <TableRowTree
        childCount={childCount}
        childChildsCount={childChildsCount}
        level={level}
      />
    </div>
  );
};

export default TableRowLevel;
