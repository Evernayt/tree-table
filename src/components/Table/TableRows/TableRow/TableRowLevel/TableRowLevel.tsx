import { FC } from "react";
import { ENTITY_ID } from "../../../../../constants/api";
import {
  createRowInEntityAPI,
  deleteRowAPI,
} from "../../../../../http/outlayAPI";
import {
  childFolderIcon,
  deleteIcon,
  docIcon,
  parentFolderIcon,
} from "../../../../../icons";
import { IOutlayRowRequest } from "../../../../../models/Outlay/IOutlayRowRequest";
import styles from "./TableRowLevel.module.scss";

interface TableRowLevelProps {
  id: number;
  parentId: number | null;
  childCount: number;
  level: number;
  isLastChild: boolean;
}

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
    rowName: "test 3",
    salary: 0,
    supportCosts: 0,
  };

  createRowInEntityAPI(parentId, outlay).then((data) => {
    console.log(data);
  });
};

const deleteRow = (id: number) => {
  deleteRowAPI(ENTITY_ID, id).then((data) => {
    console.log(data);
  });
};

const drawLines = (childCount: number, level: number, isLastChild: boolean) => {
  const upClasses = [styles.up_lines];
  const downClasses = [styles.down_lines];

  if (childCount > 0) downClasses.push(styles.dl_right);

  if (level > 0) {
    upClasses.push(styles.ul_bottom);
    upClasses.push(styles.ul_left);
    !isLastChild && downClasses.push(styles.dl_left);
  }

  return (
    <div className={styles.line_box}>
      <div className={upClasses.join(" ")} />
      <div className={downClasses.join(" ")} />
    </div>
  );
};

const drawIcon = (
  parentId: number | null,
  childCount: number,
  level: number
) => {
  if (childCount > 0 && level > 0) {
    return (
      <div className={styles.icons}>
        <img src={childFolderIcon} onClick={() => createRow(parentId)} />
        <img
          className={styles.hide_icon}
          src={docIcon}
          onClick={() => createRow(parentId)}
        />
      </div>
    );
  } else if (childCount === 0 && level > 0) {
    return (
      <div className={styles.icons}>
        <img src={docIcon} onClick={() => createRow(parentId)} />
      </div>
    );
  } else {
    return (
      <div className={styles.icons}>
        <img src={parentFolderIcon} onClick={() => createRow(parentId)} />
        <img
          className={styles.hide_icon}
          src={childFolderIcon}
          onClick={() => createRow(parentId)}
        />
        <img
          className={styles.hide_icon}
          src={docIcon}
          onClick={() => createRow(parentId)}
        />
      </div>
    );
  }
};

const TableRowLevel: FC<TableRowLevelProps> = ({
  id,
  parentId,
  childCount,
  level,
  isLastChild,
}) => {
  return (
    <div className={styles.container} style={{ marginLeft: `${level * 19}px` }}>
      <div className={styles.icons}>
        {drawIcon(parentId, childCount, level)}
        <img
          className={styles.hide_icon}
          src={deleteIcon}
          onClick={() => deleteRow(id)}
        />
      </div>
      {drawLines(childCount, level, isLastChild)}
    </div>
  );
};

export default TableRowLevel;
