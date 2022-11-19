import { FC, MouseEvent, useState, useEffect } from "react";
import { ENTITY_ID } from "../../../../constants/api";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { updateRowAPI } from "../../../../http/outlayAPI";
import { IOutlayTreeResponse } from "../../../../models/Outlay/IOutlayTreeResponse";
import {
  editOutlayAction,
  setSelectedRowIdAction,
} from "../../../../store/reducers/OutlaySlice";
import Textbox from "../../../UI/Textbox/Textbox";
import styles from "./TableRow.module.scss";
import TableRowLevel, { IRowLevel } from "./TableRowLevel/TableRowLevel";

interface TableRowProps extends IRowLevel {
  outlay: IOutlayTreeResponse;
}

const calcChildChildsCount = (outlayChilds: IOutlayTreeResponse[]): number => {
  let childChildsCount = 0;
  for (let i = 0; i < outlayChilds.length - 1; i++) {
    const outlayChild = outlayChilds[i];
    childChildsCount += outlayChild.child.length;
  }
  return childChildsCount;
};

const TableRow: FC<TableRowProps> = ({ outlay, parentId, level }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [rowName, setRowName] = useState<string>(outlay.rowName);
  const [salary, setSalary] = useState<number>(outlay.salary);
  const [equipmentCosts, setEquipmentCosts] = useState<number>(
    outlay.equipmentCosts
  );
  const [overheads, setOverheads] = useState<number>(outlay.overheads);
  const [estimatedProfit, setEstimatedProfit] = useState<number>(
    outlay.estimatedProfit
  );

  const selectedRowId = useAppSelector((state) => state.outlay.selectedRowId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedRowId === outlay.id) {
      setIsEdit(true);
    } else {
      if (isEdit) saveRow();
    }
  }, [selectedRowId]);

  const selectRow = (e: MouseEvent<HTMLTableRowElement>) => {
    const id = (e.target as HTMLTableRowElement).id;
    if (id) return;

    dispatch(setSelectedRowIdAction(outlay.id));
  };

  const saveRow = () => {
    setIsEdit(false);

    const editedRow: IOutlayTreeResponse = {
      ...outlay,
      rowName,
      salary,
      equipmentCosts,
      overheads,
      estimatedProfit,
    };
    updateRowAPI(ENTITY_ID, outlay.id, editedRow).then(() => {
      dispatch(editOutlayAction(editedRow));
    });
  };

  const keyDownHandler = (key: string) => {
    if (key === "Enter") {
      saveRow();
      dispatch(setSelectedRowIdAction(null));
    }
  };

  return (
    <tr className={styles.container} onDoubleClick={selectRow}>
      <td id="icons">
        <TableRowLevel
          id={outlay.id}
          parentId={parentId}
          level={level}
          childCount={outlay.child.length}
          childChildsCount={calcChildChildsCount(outlay.child)}
        />
      </td>
      {selectedRowId === outlay.id ? (
        <>
          <td>
            <Textbox
              value={rowName}
              autoFocus
              onChange={(e) => setRowName(e.target.value)}
              onKeyDown={(e) => keyDownHandler(e.key)}
            />
          </td>
          <td>
            <Textbox
              type={"number"}
              step="0.01"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              onKeyDown={(e) => keyDownHandler(e.key)}
            />
          </td>
          <td>
            <Textbox
              type={"number"}
              step="0.01"
              value={equipmentCosts}
              onChange={(e) => setEquipmentCosts(Number(e.target.value))}
              onKeyDown={(e) => keyDownHandler(e.key)}
            />
          </td>
          <td>
            <Textbox
              type={"number"}
              step="0.01"
              value={overheads}
              onChange={(e) => setOverheads(Number(e.target.value))}
              onKeyDown={(e) => keyDownHandler(e.key)}
            />
          </td>
          <td>
            <Textbox
              type={"number"}
              step="0.01"
              value={estimatedProfit}
              onChange={(e) => setEstimatedProfit(Number(e.target.value))}
              onKeyDown={(e) => keyDownHandler(e.key)}
            />
          </td>
        </>
      ) : (
        <>
          <td>{outlay.rowName}</td>
          <td>{outlay.salary.toLocaleString()}</td>
          <td>{outlay.equipmentCosts.toLocaleString()}</td>
          <td>{outlay.overheads.toLocaleString()}</td>
          <td>{outlay.estimatedProfit.toLocaleString()}</td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
