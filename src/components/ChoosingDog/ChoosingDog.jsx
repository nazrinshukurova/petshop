import React from "react";
import photo5 from "../../assets/index-04.png";
import styles from "./ChoosingDog.module.css";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Button/Button";
import Image_box from "../../shared/ImageBox/Image_box";
import { Link } from "react-router-dom";

const ChoosingDog = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.section_layout}>
      <Image_box src={photo5} />
      <h4 className={styles.title}>{t("choosing_dog.title")}</h4>
      <p className={styles.text}>{t("choosing_dog.paragraph")}</p>
      <Link style={{ textDecoration: "none" }} to="/delivery">
        <Button textKey="welcome_section.btn" />
      </Link>
    </div>
  );
};

export default ChoosingDog;
