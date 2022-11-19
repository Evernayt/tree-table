import { FC } from "react";
import { IOutlayTreeResponse } from "../../../models/Outlay/IOutlayTreeResponse";
import TableRow from "./TableRow/TableRow";
import { IRowLevel } from "./TableRow/TableRowLevel/TableRowLevel";

interface TableRowsProps extends IRowLevel {
  outlay: IOutlayTreeResponse;
}

const TableRows: FC<TableRowsProps> = ({ outlay, parentId, level }) => {
  return (
    <>
      <TableRow
        outlay={outlay}
        parentId={parentId}
        level={level}
        key={outlay.id}
      />
      {outlay.child.map((childOutlay) => (
        <TableRows
          outlay={childOutlay}
          parentId={outlay.id}
          level={level + 1}
          key={childOutlay.id}
        />
      ))}
    </>
  );
};

export default TableRows;
