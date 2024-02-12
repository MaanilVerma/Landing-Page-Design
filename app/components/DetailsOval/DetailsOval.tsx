import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import styles from "./DetailsOval.module.scss";

type DetailsProp = {
  text: string;
  ovalBackgroundColor: string;
  borderColor: string;
  circleBackgroundColor: string;
};
const DetailsOval: React.FC<DetailsProp> = ({
  text,
  ovalBackgroundColor,
  borderColor,
  circleBackgroundColor,
}) => {
  return (
    <div
      className={styles["oval-container"]}
      style={{ background: ovalBackgroundColor, borderColor: borderColor }}
    >
      <p>{text}</p>
      <div className={styles["arrow-container"]}>
        <div
          className={styles.circle}
          style={{ backgroundColor: circleBackgroundColor }}
        />
        <ArrowUpRightIcon
          color="#ffffff"
          height={32}
          width={32}
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default DetailsOval;
