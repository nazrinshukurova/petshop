import React from "react";
import photo2 from "../../assets/index-02.png";
import styles from "./Welcome_Section.module.css";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Button/Button";

const Welcome_Section = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.welcome_section}>
        <img width="441px" height="357px" src={photo2}></img>
        <h4 className={styles.welcome_text}>
          {t("welcome_section.welcome_text")}
        </h4>
        <p className={styles.welcome_paragraph}>
          {t("welcome_section.welcome_paragraph")}
        </p>
        <Button textKey="welcome_section.btn" />
      </div>
    </>
  );
};

export default Welcome_Section;
