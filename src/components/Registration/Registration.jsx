import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Registration.module.css";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim() || !/^[A-Za-z]+/.test(name) || name.length < 2)
      newErrors.name = "Name is required";

    if (!phone.trim() || !/^[0-9]{10}$/.test(phone))
      newErrors.phone = "Valid phone number is required (10 digits)";

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Valid email is required";

    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const reset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ name, phone, email, message }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        toast.success(t("form.successMessage")); // Show success toast
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(t("form.errorMessage")); // Show error toast
      });

    reset();
  };

  return (
    <div>
      <h4 className={styles.title}>{t("form.title")}</h4>
      <div className={styles.form}>
        <div className={styles.form_part_1}>
          <div className={styles.caption}>
            <input
              className={styles.input_box}
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder={t("form.name")}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div className={styles.caption}>
            <input
              className={styles.input_box}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              value={phone}
              placeholder={t("form.phone")}
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone}</span>
            )}
          </div>
          <div className={styles.caption}>
            <input
              className={styles.input_box}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
              placeholder={t("form.email")}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>
        </div>
        <div className={styles.caption}>
          <textarea
            className={styles.message_box}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder={t("form.message")}
          ></textarea>
          {errors.message && (
            <span className={styles.error}>{errors.message}</span>
          )}
        </div>
        <button className={styles.send_message} onClick={handleSubmit}>
          {t("form.key")}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Form;
