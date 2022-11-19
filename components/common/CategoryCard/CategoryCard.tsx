import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
  categoryName: string;
  categoryImage: string;
  path: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  categoryImage,
  path,
}) => {
  return (
    <Link href={`${path}/0`} className={styles.cardContainer}>
      <p className={styles.cardText}>{categoryName}</p>
      <div className={styles.cardImageContainer}>
        <Image
          src={categoryImage}
          alt={categoryName}
          width={400}
          height={70}
          style={{ objectFit: "cover" }}
        />
      </div>
    </Link>
  );
};
