import React from "react";
import Image from "next/image";

import styles from "./ImageContainer.module.scss";

interface ImageContainerProps {
  imageAlt: string;
  imageSrc: string;
  multiSrcSet?: boolean;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  imageAlt,
  imageSrc,
  multiSrcSet,
}) => {
  if (multiSrcSet) {
    return (
      <div>
        <Image alt={imageAlt} src={imageSrc} width={200} height={400} />
      </div>
    );
  }
  return (
    <div className={styles.imageContainer}>
      <Image
        fill
        style={{ objectFit: "cover" }}
        priority
        alt={imageAlt}
        src={imageSrc}
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
