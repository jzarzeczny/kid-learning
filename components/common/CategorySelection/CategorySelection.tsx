import React from "react";
import { CategoryInterface } from "@interfaces/CategoryInterface";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import styles from "./CategorySelection.module.scss";
import { sortCategoriesByGroup } from "utils";

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
        {Object.keys(sortCategoriesByGroup(categoryData)).map((key, index) => {
          return (
            <div className={styles.categoryWrapper} key={index}>
              <span className={styles.categoryHeader}>{key}</span>
              {sortCategoriesByGroup(categoryData)[key].map((category) => (
                <CategoryCard
                  key={category.categoryName}
                  categoryName={category.categoryName}
                  categoryImage={category.categoryImage}
                  path={`${path}/${category.categoryId}`}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};
