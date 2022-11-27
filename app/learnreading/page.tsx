import { CategorySelection } from "@components/common/CategorySelection/CategorySelection";
import { letterLearningData } from "@data/typeLearningData";

const PATH_URL = "learnreading";

export default function LearningReadingPage() {
  return (
    <CategorySelection
      headerText={"Kategorie gry w naukę czytania"}
      categoryData={letterLearningData}
      path={PATH_URL}
    />
  );
}
