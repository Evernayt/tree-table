import { FC } from "react";
import { IOutlayTreeResponse } from "../../../models/Outlay/IOutlayTreeResponse";
import TableRow from "./TableRow/TableRow";
import { IRowLevel } from "./TableRow/TableRowLevel/TableRowLevel";

interface TableRowsProps extends IRowLevel {
  outlay: IOutlayTreeResponse;
}

const TableRows: FC<TableRowsProps> = ({
  outlay,
  parentId,
  level,
  isLastChild,
  isSingleParent,
}) => {
  return (
    <>
      <TableRow
        outlay={outlay}
        parentId={parentId}
        level={level}
        isLastChild={isLastChild}
        isSingleParent={isSingleParent}
      />
      {outlay.child.map((childOutlay, index) => (
        <TableRows
          outlay={childOutlay}
          parentId={outlay.id}
          level={level + 1}
          isLastChild={outlay.child.length === index + 1}
          isSingleParent={isSingleParent}
          key={childOutlay.id}
        />
      ))}
    </>
  );
};

export default TableRows;
