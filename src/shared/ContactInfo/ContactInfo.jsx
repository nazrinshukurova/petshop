import React from "react";
import styles from "./Contact.module.css";
import { MdPhoneIphone, MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactItem}>
        <MdPhoneIphone className={styles.icon} />
        <span>+1 800 559 35 48</span>
      </div>
      <div className={styles.contactItem}>
        <MdEmail className={styles.icon} />
        <span>info@demolink.org</span>
      </div>
    </div>
  );
};

export default ContactInfo;
