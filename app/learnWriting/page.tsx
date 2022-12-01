import { CategorySelection } from "@components/common/CategorySelection/CategorySelection";
import { letterLearningData } from "@data/typeLearningData";

const PATH_URL = "learnWriting";

export default function LearnWritingCategorySelection() {
  return (
    <CategorySelection
      headerText={"Kategorie gry w naukę pisania"}
      categoryData={letterLearningData}
      path={PATH_URL}
    />
  );
}
