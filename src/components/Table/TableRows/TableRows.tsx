import { FC } from "react";
import { IOutlayTreeResponse } from "../../../models/Outlay/IOutlayTreeResponse";
import TableRow from "./TableRow/TableRow";

interface TableRowsProps {
  outlays: IOutlayTreeResponse[];
}

const TableRows: FC<TableRowsProps> = ({ outlays }) => {
  const renderTree = (
    outlay: IOutlayTreeResponse,
    parentId: number | null
  ): JSX.Element => {
    console.log(outlay.id)
    return (
      <>
        <TableRow outlay={outlay} parentId={parentId} key={outlay.id} />
        {outlay.child.map((childOutlay) => renderTree(childOutlay, outlay.id))}
      </>
    );
  };

  return <>{outlays.map((outlay) => renderTree(outlay, null))}</>;
};

export default TableRows;
