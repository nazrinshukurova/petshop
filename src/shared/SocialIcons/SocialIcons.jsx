import React from "react";
import styles from "./SocialIcons.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.icon}>
        <FaFacebookF />
      </div>
      <div className={styles.icon}>
        <FaTwitter />
      </div>
      <div className={styles.icon}>
        <FaGooglePlusG />
      </div>
      <div className={styles.icon}>
        <FaInstagram />
      </div>
    </div>
  );
};

export default SocialIcons;
