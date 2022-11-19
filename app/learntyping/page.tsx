import Link from "next/link";
import { CategoryCard } from "../../components/common/CategoryCard/CategoryCard";
import { SectionHeader } from "../../components/common/SectionHeader/SectionHeader";
import { letterLearningData } from "../../data/typeLearningData";
export default function Page() {
  return (
    <section>
      <SectionHeader text="Kategorie gry w naukę pisania" />
      <Link href="/learntyping/0">First photo</Link>);
      {letterLearningData.map((category) => (
        <CategoryCard
          key={category.categoryName}
          categoryName={category.categoryName}
          categoryImage={category.categoryImage}
          path={category.href}
        />
      ))}
    </section>
  );
}
