import React from "react";
import styles from "./Links.module.css";
import { useTranslation } from "react-i18next";
import link1 from "../../assets/links-01.png";

const Links = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.links_section}>
      <div className={styles.dog_photo_box}>
        <img src={link1}></img>
      </div>
    </div>
  );
};

export default Links;
