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
import { addOutlayAction } from "../../../../../../store/reducers/OutlaySlice";
import styles from "./TableRowIcons.module.scss";

interface TableRowIconsProps {
  id: number;
  parentId: number | null;
  level: number;
}

const TableRowIcons: FC<TableRowIconsProps> = ({ id, parentId, level }) => {
  const dispatch = useAppDispatch();

  const createRow = (parentId: number | null) => {
    const outlay: IOutlayRowRequest = {
      parentId,
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      rowName: "test" + new Date().getTime(),
      salary: 0,
      supportCosts: 0,
    };

    const createdOutlay: IOutlayTreeResponse = {
      ...outlay,
      id: new Date().getTime(),
      total: 0,
      child: [],
    };
    if (parentId)
      dispatch(addOutlayAction({ parentId, outlay: createdOutlay }));

    // createRowInEntityAPI(ENTITY_ID, outlay).then((data) => {
    //   const createdOutlay: IOutlayTreeResponse = {
    //     ...outlay,
    //     id: new Date().getTime(),
    //     total: 0,
    //     child: [],
    //   };
    //   console.log(data.current)
    //   dispatch(addOutlayAction(parentId, createdOutlay));
    // });
  };

  const deleteRow = (id: number) => {
    deleteRowAPI(ENTITY_ID, id).then((data) => {
      console.log(data);
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
              onClick={() => createRow(id)}
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
