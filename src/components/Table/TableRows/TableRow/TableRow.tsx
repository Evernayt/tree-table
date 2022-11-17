import { FC } from "react";
import { IOutlayTreeResponse } from "../../../../models/Outlay/IOutlayTreeResponse";
import styles from "./TableRow.module.scss";
import TableRowLevel from "./TableRowLevel/TableRowLevel";

interface TableRowProps {
  outlay: IOutlayTreeResponse;
  parentId: number | null;
}

const TableRow: FC<TableRowProps> = ({ outlay, parentId }) => {
  return (
    <tr className={styles.container}>
      <td>
        <TableRowLevel
          id={outlay.id}
          parentId={parentId}
          childCount={outlay.child.length}
          level={1}
          isLastChild={false}
        />
      </td>
      <td>{outlay.rowName}</td>
      <td>20 348</td>
      <td>1 750</td>
      <td>108,07</td>
      <td>1 209 122,5</td>
    </tr>
  );
};

export default TableRow;
