import Link from "next/link";
import React from "react";
import styles from "./CategoryCard.module.scss";
import { CategoryCardImage } from "./CatrgoryCardImage";

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
      <CategoryCardImage imageSrc={categoryImage} imageAlt={categoryName} />
    </Link>
  );
};
