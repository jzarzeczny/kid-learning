import { CategoryCard } from "../../components/common/CategoryCard/CategoryCard";
import { SectionHeader } from "../../components/common/SectionHeader/SectionHeader";
import { letterLearningData } from "../../data/typeLearningData";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <section className={styles.categorySection}>
      <SectionHeader text="Kategorie gry w naukę pisania" />
      <div className={styles.categoryContainer}>
        {letterLearningData.map((category) => (
          <CategoryCard
            key={category.categoryName}
            categoryName={category.categoryName}
            categoryImage={category.categoryImage}
            path={category.href}
          />
        ))}
      </div>
    </section>
  );
}
