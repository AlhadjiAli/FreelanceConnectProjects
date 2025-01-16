import React from "react";
import styles from "./ClientSection.module.css";

const ClientSection = ({ title, subtitle, logos }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.logoTrack}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt || `Logo ${index + 1}`}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
