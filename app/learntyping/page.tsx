import { CategorySelection } from "@components/common/CategorySelection/CategorySelection";
import { letterLearningData } from "@data/typeLearningData";

const PATH_URL = "learnTyping";

export default function LearnTypingCategorySelection() {
  return (
    <CategorySelection
      headerText={"Kategorie gry w naukę pisania liter"}
      categoryData={letterLearningData}
      path={PATH_URL}
    />
  );
}
