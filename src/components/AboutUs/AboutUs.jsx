import React from "react";
import styles from "./AboutUs.module.css";
import about1 from "../../assets/about-01.png";
import about2 from "../../assets/about-02.jpg";
import about3 from "../../assets/about-03.png";
import about4 from "../../assets/about-04.jpg";
import about5 from "../../assets/about-05.jpg";
import about6 from "../../assets/about-06.jpg";
import { useTranslation } from "react-i18next";
import Line from "../../shared/Line/Line";
import Image_box from "../../shared/ImageBox/Image_box";
import Thumbnail from "../../shared/thumbnail/Thumbnail";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className={styles.about_layout}>
        <Image_box src={about1} />
        <h4 className={styles.about_title}>{t("about.about_title")}</h4>
        <p className={styles.about_text}>{t("about.about_text_1")}</p>
        <p className={styles.about_text}>{t("about.about_text_2")}</p>
      </section>

      <section className={styles.about_section}>
        <Line />
        <h4 className={styles.reputation_title}>
          {t("reputation.reputation_title")}
        </h4>

        <div className={styles.reputation_box}>
          <span className={styles.reputation_question}>
            01. {t("reputation.reputation_question_1")}
          </span>
          <p className={styles.reputation_text}>
            {t("reputation.reputation_text_1")}
          </p>
        </div>

        <div className={styles.reputation_box}>
          <span className={styles.reputation_question}>
            02. {t("reputation.reputation_question_2")}
          </span>
          <p className={styles.reputation_text}>
            {t("reputation.reputation_text_2")}
          </p>
        </div>

        <div className={styles.reputation_box}>
          <span className={styles.reputation_question}>
            03. {t("reputation.reputation_question_3")}
          </span>
          <p className={styles.reputation_text}>
            {t("reputation.reputation_text_3")}
          </p>
        </div>

        <img className={styles.about_dog} src={about2} alt="Decorative dog" />
      </section>

      <Image_box src={about3} />
      <h4 className={styles.thumbnail_title}>{t("thumbnail.title")}</h4>
      <div className={styles.image_layout}>
        <Thumbnail thumbnailSrc={about4} name="Jame Smith" profession="Owner" />
        <Thumbnail
          thumbnailSrc={about5}
          name="Caroline Beek"
          profession="breeder"
        />
        <Thumbnail
          thumbnailSrc={about6}
          name="Dayle Peters"
          profession="breeder"
        />
      </div>
    </div>
  );
};

export default About;
