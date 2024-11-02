"use client";

import React, { useRef } from "react";
import styles from "./OpenKeyboardButton.module.scss";

export const OpenKeyboardButton: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.mobileKeyboardHandler}>
      <button
        className={styles.openKeyboard}
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
      >
        ⌨
      </button>
      <input
        ref={inputRef}
        autoFocus
        type="text"
        className={styles.mobileInput}
        id="showKeyboardOnMobile"
      />
    </div>
  );
};
