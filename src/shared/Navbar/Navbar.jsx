import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (myLang) => {
    i18n.changeLanguage(myLang);
  };

  return (
    <>
      <div className={styles.languageButtons}>
        <button onClick={() => changeLang("az")}>Az</button>
        <button onClick={() => changeLang("en")}>En</button>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.list_group}>
          <div className={styles.image}>
            <li>
              <img src={logo} alt="Logo" />
            </li>
          </div>
          <div className={styles.navlinks}>
            <li className={styles.li}>
              <Link
                style={{ textDecoration: "none", color: " #313131" }}
                to="/"
              >
                {t("navbar.home_page")}
              </Link>
            </li>
            <li className={styles.border}></li>
            <Link
              style={{ textDecoration: "none", color: " #313131" }}
              to="/gallery"
            >
              <li className={styles.li}>{t("navbar.gallery")}</li>
            </Link>
            <li className={styles.border}></li>
            <Link
              to="/about_us"
              style={{ textDecoration: "none", color: " #313131" }}
            >
              <li className={styles.li}>{t("navbar.about_us")}</li>
            </Link>
            <li className={styles.border}></li>
            <Link
              style={{ textDecoration: "none", color: " #313131" }}
              to="/links"
            >
              <li className={styles.li}>{t("navbar.links")}</li>
            </Link>
            <li className={styles.border}></li>
            <Link
              style={{ textDecoration: "none", color: " #313131" }}
              to="/contacts"
            >
              <li className={styles.li}>{t("navbar.contact")}</li>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
