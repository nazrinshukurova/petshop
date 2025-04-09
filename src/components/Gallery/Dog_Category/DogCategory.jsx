import React from "react";
import styles from "./DogCategory.module.css";
import photo1 from "../../../assets/gallery-03.jpg";
import photo2 from "../../../assets/gallery-04.jpg";
import photo3 from "../../../assets/gallery-05.jpg";
import photo4 from "../../../assets/gallery-06.jpg";
import photo5 from "../../../assets/gallery-07_original.jpg";
import photo6 from "../../../assets/gallery-08_original.jpg";
import photo7 from "../../../assets/gallery-02.png";
import photo9 from "../../../assets/gallery-09.png";
import photo10 from "../../../assets/gallery-10.jpg";
import { useTranslation } from "react-i18next";
import Button from "../../../shared/Button/Button";
import Line from "../../../shared/Line/Line";

const Dog_Category = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.grid_box}>
      <img src={photo7}></img>
      <h4 className={styles.title}>{t("gallery.useful_tips.title_2")}</h4>
      <div className={styles.grid}>
        <div className={styles.cell}>
          <img src={photo1}></img>
        </div>
        <div className={styles.cell}>
          <img src={photo2}></img>
        </div>
        <div className={styles.cell}>
          <img src={photo3}></img>
        </div>
        <div className={styles.cell}>
          <img src={photo4}></img>
        </div>
        <div className={styles.cell}>
          <img src={photo5}></img>
        </div>
        <div className={styles.cell}>
          <img src={photo6}></img>
        </div>
      </div>
      <div className={styles.photo_box}>
        <img src={photo9}></img>
        <Line/>
        <h5>{t("mission.main_title")}</h5>
        <div className={styles.mission_box}>
          <div className={styles.text_groups}>
            <h6 className={styles.text_groups_title}>{t("mission.title_3")}</h6>
            <p className={styles.text_groups_texts}>{t("mission.text_1")}</p>
            <p className={styles.text_groups_texts}>{t("mission.text_2")}</p>
            <Button textKey="mission.btn_text"  />
          </div>
          <div className={styles.photo10_box}>
            <img className={styles.photo10} src={photo10}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dog_Category;
