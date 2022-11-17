import { useState } from "react";
import { PROJECTS } from "../../constants/mockData";
import styles from "./Sidemenu.module.scss";
import SidemenuHeader from "./SidemenuHeader/SidemenuHeader";
import SidemenuItem from "./SidemenuItem/SidemenuItem";

const Sidemenu = () => {
  const [activeItem, setActiveItem] = useState<number>(4);

  return (
    <div className={styles.container}>
      <SidemenuHeader />
      {PROJECTS.map((project, index) => (
        <SidemenuItem
          name={project.name}
          isActive={activeItem === index}
          onClick={() => setActiveItem(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default Sidemenu;
