import styles from "./TableHeader.module.scss";

const TableHeader = () => {
  return (
    <thead className={styles.container}>
      <tr>
        <th>Уровень</th>
        <th className={styles.fill}>Наименование работ</th>
        <th>Основная з/п</th>
        <th>Оборудование</th>
        <th>Накладные расходы</th>
        <th>Сметная прибыль</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
