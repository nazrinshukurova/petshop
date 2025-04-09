import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Button.module.css";

const Button = ({ textKey }) => {
  const { t } = useTranslation();

  return (
    <div>
      <a className={styles.btn} href="#">
        {t(textKey)}
      </a>
    </div>
  );
};

export default Button;

