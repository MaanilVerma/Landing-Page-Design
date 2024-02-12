"use client";

import React from "react";
import fallbackImage from "../../../public/assets/fallback.jpg";
import styles from "./StackedAvatar.module.scss";

const StackedAvatar = () => {
  const handleImageError = (event) => {
    event.target.src = fallbackImage; // Set the src attribute to the fallback image
  };
  return (
    <div className={styles["avatar-row"]}>
      <div className={styles.avatar}>
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Avatar 1"
          onError={handleImageError}
        />
      </div>
      <div className={styles.avatar}>
        <img
          src="https://randomuser.me/api/portraits/men/25.jpg"
          alt="Avatar 2"
          onError={handleImageError}
        />
      </div>
      <div className={styles.avatar}>
        <img
          src="https://randomuser.me/api/portraits/women/25.jpg"
          alt="Avatar 3"
          onError={handleImageError}
        />
      </div>
      <div className={`${styles.avatar}`}>
        <div className={styles.overlay} />
        <img
          src="https://randomuser.me/api/portraits/men/55.jpg"
          alt="Avatar 4"
          onError={handleImageError}
        />
        <div className={styles["overlay-content"]}>+2</div>
      </div>
    </div>
  );
};

export default StackedAvatar;
