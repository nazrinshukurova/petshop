import React from "react";
import styles from "./Thumbnail.module.css";
import { useTranslation } from "react-i18next";

const Thumbnail = ({ thumbnailSrc, name, profession }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.image_box}>
        <img className={styles.image} src={thumbnailSrc} alt="Image" />
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.profession}>{profession}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
