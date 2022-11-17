import { FC } from "react";
import { IOutlayTreeResponse } from "../../../../models/Outlay/IOutlayTreeResponse";
import styles from "./TableRow.module.scss";
import TableRowLevel, { IRowLevel } from "./TableRowLevel/TableRowLevel";

interface TableRowProps extends IRowLevel {
  outlay: IOutlayTreeResponse;
}

const TableRow: FC<TableRowProps> = ({
  outlay,
  parentId,
  level,
  isLastChild,
  isSingleParent,
}) => {
  return (
    <tr className={styles.container}>
      <td>
        <TableRowLevel
          id={outlay.id}
          parentId={parentId}
          childCount={outlay.child.length}
          level={level}
          isLastChild={isLastChild}
          isSingleParent={isSingleParent}
        />
      </td>
      <td>{outlay.rowName}</td>
      <td>{outlay.salary.toLocaleString()}</td>
      <td>{outlay.equipmentCosts.toLocaleString()}</td>
      <td>{outlay.overheads.toLocaleString()}</td>
      <td>{outlay.estimatedProfit.toLocaleString()}</td>
    </tr>
  );
};

export default TableRow;
