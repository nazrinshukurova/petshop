import React from "react";
import styles from "./LinksTitle.module.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LinksTitle = ({ dogPhoto, name }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <div className={styles.text_section}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.subtitle}>{t("links.section_2.delivery")}</p>
      </div>
      <img className={styles.dog_image} src={dogPhoto} alt="Labrador puppies" />
      <div className={styles.button_box}>
        <Link to="/about_us">
          <div className={styles.button}>{t("links.section_2.btn")}</div>
        </Link>
      </div>
    </div>
  );
};

export default LinksTitle;
