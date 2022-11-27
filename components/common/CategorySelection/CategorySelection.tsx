import React from "react";
import { CategoryInterface } from "../../../interfaces/CategoryInterface";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import styles from "./CategorySelection.module.scss";

interface CategorySelectionProps {
  headerText: string;
  categoryData: CategoryInterface[];
  path: string;
}

export const CategorySelection: React.FC<CategorySelectionProps> = ({
  headerText,
  categoryData,
  path,
}) => {
  return (
    <section className={styles.categorySection}>
      <SectionHeader text={headerText} />
      <div className={styles.categoryContainer}>
        {categoryData.map((category) => (
          <CategoryCard
            key={category.categoryName}
            categoryName={category.categoryName}
            categoryImage={category.categoryImage}
            path={`${path}/${category.categoryId}`}
          />
        ))}
      </div>
    </section>
  );
};
