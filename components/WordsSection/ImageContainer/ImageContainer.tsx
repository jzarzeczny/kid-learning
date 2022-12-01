import React from "react";
import Image from "next/image";

import styles from "./ImageContainer.module.scss";

interface ImageContainerProps {
  imageAlt: string;
  imageSrc: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  imageAlt,
  imageSrc,
}) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        fill
        style={{ objectFit: "cover" }}
        priority
        alt={imageAlt}
        src={imageSrc}
      />
    </div>
  );
};
