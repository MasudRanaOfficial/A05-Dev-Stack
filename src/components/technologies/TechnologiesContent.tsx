import { use, useState } from "react";
import type { Technology } from "../../types/technology";
import StackSidebar from "../stack/StackSidebar";
import TechSection from "./TechSection";

interface TechnologiesContentProps {
  technologiesPromise: Promise<Technology[]>;
}

const TechnologiesContent = ({
  technologiesPromise,
}: TechnologiesContentProps) => {
  const technologies = use(technologiesPromise);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      alert(`$(tech.name) is already added to your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);
  };

  const handleRemoveItem = (id: string) => {
    setSelectedStack(selectedStack.filter(item => item.id !== id))
  };

  const handleClearStack = () => {
    setSelectedStack([]);
  }

  return (
    <TechSection
      technologies={technologies}
      stackItemIds={selectedStack.map((item) => item.id)}
      onAddToStack={handleAddToStack}
      sidebarSlot={<StackSidebar 
    selectedStack={selectedStack}
    onRemoveItem={handleRemoveItem}
    onClearStack={handleClearStack} />}
    ></TechSection>
  );
};

export default TechnologiesContent;
