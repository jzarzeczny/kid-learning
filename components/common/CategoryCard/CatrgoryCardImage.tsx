"use client";
import React from "react";
import Image from "next/image";
interface CategoryCardImageProps {
  imageSrc: string;
  imageAlt: string;
}
import styles from "./CategoryCardImage.module.scss";

export const CategoryCardImage: React.FC<CategoryCardImageProps> = ({
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className={styles.cardImageContainer}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={500}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
