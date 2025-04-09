import React from "react";
import styles from "./AboutUs.module.css";
import about1 from "../../assets/about-01.png";
import { useTranslation } from "react-i18next";
import Line from "../../shared/Line/Line";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.about_layout}>
        <img src={about1}></img>
        <h4 className={styles.about_title}>{t("about.about_title")}</h4>
        <p className={styles.about_text}>{t("about.about_text_1")}</p>
        <p className={styles.about_text}>{t("about.about_text_2")}</p>
      </div>

      <div className={styles.about_section}>
        <Line />
        <h4 className={styles.reputation_title}>
          {t("reputation.reputation_title")}
        </h4>
        <p className={styles.reputation_text}>
          {t("reputation.reputation_text_1")}
        </p>
        <p className={styles.reputation_text}>
          {t("reputation.reputation_text_2")}
        </p>
        <p className={styles.reputation_text}>
          {t("reputation.reputation_text_3")}
        </p>
      </div>
    </div>
  );
};

export default About;
