"use client";

import React, { useEffect } from "react";
import { CategoryInterface } from "@interfaces/CategoryInterface";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { SectionHeader } from "../SectionHeader/SectionHeader";

import styles from "./CategorySelection.module.scss";
import serverPath from "helpers/helpers";
import { typeLearningQuestions } from "@data/typeLearningData";

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
  useEffect(() => {
    const photos = async () => {
      const paths = getPaths();

      await Promise.all(paths.map((path) => fetchPhoto(path)));
    };

    const getPaths = () => {
      const urls: string[] = [];
      for (const category in typeLearningQuestions) {
        typeLearningQuestions[category].forEach((image) =>
          urls.push(image.image)
        );
      }
      return urls;
    };

    const fetchPhoto = async (url: string) => {
      await fetch(url);
    };
    photos().catch((e) => console.log(e));
  });

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
