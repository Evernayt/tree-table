import styles from "./TableTabs.module.scss";
import TableTab from "./TableTab/TableTab";

const TableTabs = () => {
  return (
    <div className={styles.container}>
      <TableTab name="Строительно-монтажные работы" />
    </div>
  );
};

export default TableTabs;
