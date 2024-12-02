"use client";

import styles from "./header.module.css";

export function ScratchHeader() {
  return (
    <div className={styles["header"]}>
      <img src="/icons/roboshop-logo-32.png" alt="" height="32" />
      <h1 className={styles["header-title"]}>roboshop scratch</h1>
    </div>
  );
}
