import { useEffect } from "react";
import { ENTITY_ID } from "../../constants/api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getTreeRowsAPI } from "../../http/outlayAPI";
import { setOutlaysAction } from "../../store/reducers/OutlaySlice";
import styles from "./Table.module.scss";
import TableHeader from "./TableHeader/TableHeader";
import TableRows from "./TableRows/TableRows";
import TableTabs from "./TableTabs/TableTabs";

const Table = () => {
  const outlays = useAppSelector((state) => state.outlay.outlays);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const controller = new AbortController();

    getTreeRowsAPI(ENTITY_ID, controller.signal)
      .then((data) => {
        dispatch(setOutlaysAction(data));
        console.log(data);
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  return (
    <div className={styles.container}>
      <TableTabs />
      <table className={styles.table}>
        <TableHeader />
        <tbody>
          {outlays.map((outlay) => (
            <TableRows
              outlay={outlay}
              parentId={null}
              level={0}
              isLastChild={false}
              isSingleParent={outlay.child.length === 1}
              key={outlay.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
