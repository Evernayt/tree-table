import { ENTITY_ID } from "../../../constants/api";
import { useAppDispatch } from "../../../hooks/redux";
import { createRowInEntityAPI } from "../../../http/outlayAPI";
import { parentFolderIcon } from "../../../icons";
import { IOutlayRowRequest } from "../../../models/Outlay/IOutlayRowRequest";
import { IOutlayTreeResponse } from "../../../models/Outlay/IOutlayTreeResponse";
import {
  addOutlayAction,
  setSelectedRowIdAction,
} from "../../../store/reducers/OutlaySlice";
import IconButton from "../../UI/IconButton/IconButton";
import styles from "./TableEmpty.module.scss";

const TableEmpty = () => {
  const dispatch = useAppDispatch();

  const createRow = () => {
    const outlay: IOutlayRowRequest = {
      parentId: null,
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
      dispatch(addOutlayAction({ parentId: null, outlay: createdOutlay }));
      dispatch(setSelectedRowIdAction(data.current.id));
    });
  };

  return (
    <div className={styles.container}>
      <span>Нет данных</span>
      <div className={styles.button} onClick={createRow}>
        <IconButton icon={parentFolderIcon} />
        <div>Создать</div>
      </div>
    </div>
  );
};

export default TableEmpty;
