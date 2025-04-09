import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.page_footer}>
        <div className={styles.container}>
          <span>©</span>
          <span id="copyright-year">2025</span>
          <span className={styles.hr}>|</span>
          <a href="privacy.html" className={styles.policy}>Privacy policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
