import React from "react";
import styles from "./Links.module.css";
import { useTranslation } from "react-i18next";
import link1 from "../../assets/links-01.png";
import Image_box from "../../shared/ImageBox/Image_box";

const Links = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.links_section}>
      <div className={styles.dog_photo_box}>
        <Image_box src={link1} />
      </div>
    </div>
  );
};

export default Links;
