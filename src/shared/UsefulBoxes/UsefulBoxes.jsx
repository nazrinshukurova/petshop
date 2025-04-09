import React from "react";
import styles from "./UsefulBoxes.module.css";

const UsefulBoxes = ({title,text}) => {
  return (
    <div>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default UsefulBoxes;
