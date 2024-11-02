import React from "react";

import { QuestionProps } from "@interfaces/QuestionPage";
import WritingComponent from "@components/common/WritingComponent/WritingComponent";

const LearnWritingQuestion: React.FC<QuestionProps> = ({ params }) => {
  const category = params.category;
  const questionId = parseInt(params.questionId);

  return (
    <WritingComponent
      category={category}
      questionId={questionId}
    ></WritingComponent>
  );
};

export default LearnWritingQuestion;
