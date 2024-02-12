import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { serviceTilesData } from "../../../utils/data";
import DetailsOval from "../DetailsOval/DetailsOval";
import StackedAvatar from "../StackedAvatar/StackedAvatar";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <>
      <section className={styles["hero-section"]}>
        <div className={styles["hero-title-container"]}>
          <h1 className={styles["hero-title"]}>
            Everything you need to start and run your Business
          </h1>
          <div className={styles["demo-container"]}>
            <Image
              src="/assets/play-icon.png"
              alt="play icon"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="/assets/play-icon.png"
            />
            <p>
              View Demos <br /> and Highlights
            </p>
          </div>
        </div>
        <div className={styles["hero-image-container"]}>
          <img
            className={styles["hero-image"]}
            src="/assets/hero-img.png"
            alt="hero section abstract shape"
            loading="eager"
          />
        </div>
        <div className={styles["hero-subtext-container"]}>
          <h4>The ideas that improve your products</h4>
          <p>
            Be among the first founders to experience the easiest way to start
            run a business.
          </p>
          <StackedAvatar />
        </div>
        <button className={styles["view-project-button"]}>
          View Projects
          <ArrowUpRightIcon
            className="arrow"
            color="#ECECEC"
            height={24}
            width={24}
          />
        </button>
      </section>
      <section className={styles["services-container"]}>
        {serviceTilesData?.map((item) => {
          return (
            <DetailsOval
              key={item?.id}
              text={item?.text}
              ovalBackgroundColor={item?.ovalBackgroundColor}
              borderColor={item?.borderColor}
              circleBackgroundColor={item?.circleBackground}
            />
          );
        })}
      </section>
    </>
  );
};

export default HeroSection;
