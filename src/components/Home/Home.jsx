import React from "react";

import styles from "../../components/Home/Home.module.css";
import dog_image from "../../assets/index-01.jpg";
import SocialIcons from "../../shared/SocialIcons/SocialIcons.jsx";
import ContactInfo from "../../shared/ContactInfo/ContactInfo";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <div className={styles.home_section_1}>
          <div className={styles.image_box}>
            <img className={styles.home_section_1_1} src={dog_image}></img>
            <div className={styles.title}>
              <h1>
                English <span className={styles.foxhound}>Foxhound</span>{" "}
                <div className={styles.sub_title}>
                  <span className={styles.and_icon_box}>
                    <span className={styles.and_icon}>&</span>{" "}
                  </span>
                  Shetland
                </div>
                <span className={styles.sheepdog}>Sheepdog</span>
              </h1>
            </div>
          </div>
          <div className={styles.home_section_2}>
            <h4 className={styles.contact}>{t("home_section_1.follow_us")}</h4>
            <SocialIcons />
            <h4 className={styles.contact}>{t("home_section_1.contacts")}</h4>
            <ContactInfo />
            <h4 className={styles.contact}>{t("home_section_1.location")}</h4>
            <h5 className={styles.location}>
              28 Jackson Blvd Ste 1020 Chicago
              <br />
              IL 60604-2340
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
