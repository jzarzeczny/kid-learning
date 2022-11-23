import React from "react";
import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  text: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return <h2 className={styles.sectionHeader}>{text}</h2>;
};
