import React from "react";
import styles from "./DogDashboard.module.css";
import photo3 from "../../assets/index-03.jpg";
import { useTranslation } from "react-i18next";

const DogDashboard = ({ dog_dashboard }) => {
  const { t } = useTranslation();

  return (
    <>
      <div>
      <hr className={styles.divider}></hr>
        <h4 className={styles.dashboard_title}>
          {t("dog_dashboard.dashboard_title")}
        </h4>
        <div className={styles.dashboard}>
          <div className={styles.innerCell}>
            <dl className={styles.term}>
              <dt>
                <span>{t("dog_dashboard.breed_number")}</span>
                <span className={styles.dots}></span>
              </dt>
              <dd>{t("dog_dashboard.breed_value")}</dd>
            </dl>
            <dl className={styles.term}>
              <dt>
                <span>{t("dog_dashboard.lifespan")}</span>
                <span className={styles.dots}></span>
              </dt>
              <dd>{t("dog_dashboard.lifespan_value")}</dd>
            </dl>
            <dl className={styles.term}>
              <dt>
                <span>{t("dog_dashboard.temperament")}</span>
                <span className={styles.dots}></span>
              </dt>
              <dd>{t("dog_dashboard.temperament_value")}</dd>
            </dl>
            <dl className={styles.term}>
              <dt>
                <span>{t("dog_dashboard.weight")}</span>
                <span className={styles.dots}></span>
              </dt>
              <dd>{t("dog_dashboard.weight_value")}</dd>
            </dl>
            <dl className={styles.term}>
              <dt>
                <span>{t("dog_dashboard.availability")}</span>
                <span className={styles.dots}></span>
              </dt>
              <dd>{t("dog_dashboard.availability_value")}</dd>
            </dl>
            <dl className={styles.term}>
              <dt>
                <span>{t("dog_dashboard.colours")}</span>
                <span className={styles.dots}></span>
              </dt>
              <dd>{t("dog_dashboard.colours_value")}</dd>
            </dl>
            <dl className={styles.term}>
              <dt>
                <span>{t("dog_dashboard.grooming")}</span>
                <span className={styles.dots}></span>
              </dt>
              <dd>{t("dog_dashboard.grooming_value")}</dd>
            </dl>
          </div>
          <img className={styles.dog_photo} src={photo3} alt="dog" />
        </div>
      </div>
    </>
  );
};

export default DogDashboard;
