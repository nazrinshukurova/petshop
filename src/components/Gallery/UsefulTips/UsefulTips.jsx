import React from "react";
import photo9 from "../../../assets/gallery-01.png";
import styles from "./UsefulTips.module.css";
import { useTranslation } from "react-i18next";
import Image_box from "../../../shared/ImageBox/Image_box";

const UsefulTips = ({src}) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.section_layout}>
        <Image_box  src={photo9}/>
        <h4 className={styles.title}>
        {t("gallery.useful_tips.title")}
        </h4>
        <div className={styles.cells}>
          <div className={styles.cells_box}>
            <span className={styles.number}>01.</span>
            {t("gallery.useful_tips.paragraph_1")}
          </div>
          <div className={styles.cells_box}>
            <span className={styles.number}>02.</span>

            {t("gallery.useful_tips.paragraph_1")}
          </div>
          <div className={styles.cells_box}>
            <span className={styles.number}>03.</span>
            {t("gallery.useful_tips.paragraph_1")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulTips;
