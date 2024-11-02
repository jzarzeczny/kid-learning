import { typeLearningQuestions } from "@data/typeLearningData";
import { QuestionProps } from "@interfaces/QuestionPage";
import TypingComponent from "@components/common/TypingComponent/TypingComponent";

export async function generateStaticParams() {
  const parameters: { category: string; questionId: string }[] = [];
  for (const [categoryName, questions] of Object.entries(
    typeLearningQuestions
  )) {
    for (let i = 0; i < questions.length; i++) {
      const questionId = questions[i].id;
      parameters.push({ category: categoryName, questionId: questionId });
    }
  }
  return parameters;
}

export default function LearnTypingQuestion({ params }: QuestionProps) {
  const category = params.category;
  const questionId = parseInt(params.questionId);

  return <TypingComponent category={category} questionId={questionId} />;
}
