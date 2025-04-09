import React from "react";
import photo5 from "../../assets/index-04.png";
import styles from "./ChoosingDog.module.css";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Button/Button";

const ChoosingDog = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section_layout}>
      <img src={photo5}></img>
      <h4 className={styles.title}>{t("choosing_dog.title")}</h4>
      <p className={styles.text}>{t("choosing_dog.paragraph")}</p>
      <Button textKey="welcome_section.btn" />
    </div>
  );
};

export default ChoosingDog;
