import React from "react";
import styles from "./Public.module.css";
import photo6 from "../../assets/index-08.png";
import { useTranslation } from "react-i18next";

const ArticlesSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.article_section_main}>
        <div className={styles.article_section}>
          <hr className={styles.divider}></hr>
          <h5 className={styles.main_title}>articles & publications</h5>
          <div className={styles.articles}>
            <div>
              <h6 className={styles.title}>{t("articles.title_1")}</h6>
              <p className={styles.text}>{t("articles.paragraph_1")}</p>
            </div>
            <div>
              <h6 className={styles.title}>{t("articles.title_2")}</h6>
              <p className={styles.text}>{t("articles.paragraph_2")}</p>
            </div>
          </div>
        </div>
        <img className={styles.dog_photo} src={photo6}></img>
      </div>
    </>
  );
};

export default ArticlesSection;
