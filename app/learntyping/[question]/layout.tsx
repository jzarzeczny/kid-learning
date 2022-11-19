import Header from "../../../components/Header/Header";
import { TypeLearningLetterMechanismProvider } from "../../../store/typeLearningStore";
import styles from "./layout.module.scss";
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
