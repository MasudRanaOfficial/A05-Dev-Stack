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

  console.log(setSelectedStack);

  return (
    <TechSection technologies={technologies} sidebarSlot={
      <StackSidebar selectedStack={selectedStack}/>
    }></TechSection>
    
  );
};

export default TechnologiesContent;
