import { TypeLearningLetterMechanismProvider } from "@store/typeLearningStore";
export default function LayoutTyping({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TypeLearningLetterMechanismProvider>
      {children}
    </TypeLearningLetterMechanismProvider>
  );
}
