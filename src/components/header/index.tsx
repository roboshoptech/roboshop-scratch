"use client";

import styles from "./header.module.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export function ScratchHeader() {
  return (
    <div className={styles["header"]}>
      <img
        src={`${import.meta.env.BASE_URL}icons/roboshop-logo-32.png`}
        alt=""
        height="32"
        width="32"
      />
      <h1 className={styles["header-title"]}>roboshop scratch</h1>
      <a
        href="https://www.facebook.com/roboshoptechnologies/"
        referrerPolicy="no-referrer"
        target="_blank"
        title="Roboshop Facebook profile"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/roboshoptechnologies/"
        referrerPolicy="no-referrer"
        target="_blank"
        title="Roboshop Instagram profile"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.tiktok.com/@roboschool"
        referrerPolicy="no-referrer"
        target="_blank"
        title="Roboshop Tiktok profile"
      >
        <FaTiktok />
      </a>
    </div>
  );
}
