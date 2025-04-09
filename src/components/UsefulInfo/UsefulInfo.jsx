import React from "react";
import styles from "./UsefulInfo.module.css";
import UsefulBoxes from "../../shared/UsefulBoxes/UsefulBoxes";
import { useTranslation } from "react-i18next";

const UsefulInfo = ({ title, text }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.grid_layout}>
      <UsefulBoxes
        text={t("useful_boxes.text_1")}
        title={t("useful_boxes.title_1")}
      />
      <UsefulBoxes
        text={t("useful_boxes.text_2")}
        title={t("useful_boxes.title_2")}
      />
      <UsefulBoxes
        text={t("useful_boxes.text_3")}
        title={t("useful_boxes.title_3")}
      />
      <UsefulBoxes
        text={t("useful_boxes.text_4")}
        title={t("useful_boxes.title_4")}
      />
      <UsefulBoxes
        text={t("useful_boxes.text_5")}
        title={t("useful_boxes.title_5")}
      />
      <UsefulBoxes
        text={t("useful_boxes.text_6")}
        title={t("useful_boxes.title_6")}
      />
    </div>
  );
};

export default UsefulInfo;
