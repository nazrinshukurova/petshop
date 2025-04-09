import React from "react";
import styles from "./Image.box.module.css";

const Image_box = ({ src }) => {
  return (
    <div className={styles.image}>
      <img src={src} alt="Image" />
    </div>
  );
};

export default Image_box;
