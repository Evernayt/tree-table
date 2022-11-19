import { FC } from "react";
import { ENTITY_ID } from "../../../../../../constants/api";
import { useAppDispatch } from "../../../../../../hooks/redux";
import {
  createRowInEntityAPI,
  deleteRowAPI,
} from "../../../../../../http/outlayAPI";
import {
  childFolderIcon,
  deleteIcon,
  docIcon,
  parentFolderIcon,
} from "../../../../../../icons";
import { IOutlayRowRequest } from "../../../../../../models/Outlay/IOutlayRowRequest";
import { IOutlayTreeResponse } from "../../../../../../models/Outlay/IOutlayTreeResponse";
import {
  addOutlayAction,
  deleteOutlayAction,
  setSelectedRowIdAction,
} from "../../../../../../store/reducers/OutlaySlice";
import styles from "./TableRowIcons.module.scss";

interface TableRowIconsProps {
  id: number;
  parentId: number | null;
  level: number;
}

const TableRowIcons: FC<TableRowIconsProps> = ({ id, parentId, level }) => {
  const dispatch = useAppDispatch();

  const createRow = (parentId: number | null, iterations: number = 1) => {
    if (iterations < 1) return;

    const outlay: IOutlayRowRequest = {
      parentId,
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: "",
      salary: 0,
      supportCosts: 0,
    };

    createRowInEntityAPI(ENTITY_ID, outlay).then((data) => {
      const createdOutlay: IOutlayTreeResponse = {
        ...data.current,
        child: [],
      };
      dispatch(addOutlayAction({ parentId, outlay: createdOutlay }));

      if (iterations > 1) {
        createRow(data.current.id, iterations - 1);
      } else {
        dispatch(setSelectedRowIdAction(data.current.id));
      }
    });
  };

  const deleteRow = (id: number) => {
    deleteRowAPI(ENTITY_ID, id).then(() => {
      dispatch(deleteOutlayAction(id));
    });
  };

  const renderIcons = () => {
    switch (level) {
      case 1:
        return (
          <>
            <img src={childFolderIcon} onClick={() => createRow(parentId)} />
            <img
              className={styles.hide_icon}
              src={docIcon}
              onClick={() => createRow(id)}
            />
          </>
        );
      case 2:
        return (
          <>
            <img src={docIcon} onClick={() => createRow(parentId)} />
          </>
        );
      default:
        return (
          <>
            <img src={parentFolderIcon} onClick={() => createRow(null)} />
            <img
              className={styles.hide_icon}
              src={childFolderIcon}
              onClick={() => createRow(id)}
            />
            <img
              className={styles.hide_icon}
              src={docIcon}
              onClick={() => createRow(id, 2)}
            />
          </>
        );
    }
  };

  return (
    <div className={styles.icons}>
      {renderIcons()}
      <img
        className={styles.hide_icon}
        src={deleteIcon}
        onClick={() => deleteRow(id)}
      />
    </div>
  );
};

export default TableRowIcons;
