import React from "react";
import styles from "./Links.module.css";
import { useTranslation } from "react-i18next";
import link1 from "../../assets/links-01.png";
import Image_box from "../../shared/ImageBox/Image_box";
import LinksTitle from "../../shared/smallComps/LinksTitle";
import image1 from "../../assets/links-03.jpg";
import image2 from "../../assets/links-04.jpg";
import image3 from "../../assets/links-05.jpg";
import image4 from '../../assets/links-06.png'

const Links = ({src}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.links_section}>
      <div className={styles.dog_photo_box}>
        <Image_box src={link1} />
      </div>
      {/* Section-1 */}
      <h4 className={styles.title}>{t("links.section_1.title")}</h4>
      <div className={styles.grid_layout}>
        {" "}
        <a className={styles.link} href="#">
          <span className={styles.symbol}>&gt;</span>
          {t("links.section_1.dealingWithPuppyEnquiries")}
        </a>
        <a className={styles.link} href="#">
          <span className={styles.symbol}>&gt;</span>
          {t("links.section_1.findingAGoodDogBreeder")}
        </a>
        <a className={styles.link} href="#">
          {" "}
          <span className={styles.symbol}>&gt;</span>
          {t("links.section_1.topTenQuestions")}
        </a>
        <a className={styles.link} href="#">
          {" "}
          <span className={styles.symbol}>&gt;</span>
          {t("links.section_1.keepingDogsSafe")}
        </a>
        <a className={styles.link} href="#">
          {" "}
          <span className={styles.symbol}>&gt;</span>
          {t("links.section_1.dogCareHowTo")}
        </a>
        <a className={styles.link} href="#">
          {" "}
          <span className={styles.symbol}>&gt;</span>
          {t("links.section_1.dogCareVideos")}
        </a>
      </div>
      {/* Section-2 */}
      <div className={styles.photo_gallery}>
        <LinksTitle dogPhoto={image1} name="LABRADOR RETRIEVER" />
        <LinksTitle dogPhoto={image2} name="LABRADOR RETRIEVER" />
        <LinksTitle dogPhoto={image3} name="LABRADOR RETRIEVER" />
      </div>
      <Image_box src={image4}/>
    </div>
  );
};

export default Links;
