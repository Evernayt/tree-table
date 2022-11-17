import { Header, Sidemenu, Table } from "../../components";
import styles from "./TablePage.module.scss";

const TablePage = () => {
  return (
    <>
      <Header />
      <div className={styles.table_container}>
        <Sidemenu />
        <Table />
      </div>
    </>
  );
};

export default TablePage;
