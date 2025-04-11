import React from "react";
import photo2 from "../../assets/index-02.png";
import styles from "./Welcome_Section.module.css";
import { useTranslation } from "react-i18next";
import Button from "../../shared/Button/Button";
import Image_box from "../../shared/ImageBox/Image_box";
import { Link } from "react-router-dom";

const Welcome_Section = ({ src }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.welcome_section}>
        <Image_box src={photo2} />
        <h4 className={styles.welcome_text}>
          {t("welcome_section.welcome_text")}
        </h4>
        <p className={styles.welcome_paragraph}>
          {t("welcome_section.welcome_paragraph")}
        </p>
        <Link style={{ textDecoration: "none" }} to="/delivery">
          <Button textKey="welcome_section.btn" />
        </Link>
      </div>
    </>
  );
};

export default Welcome_Section;
