import { use, useState } from "react";
import type { Technology } from "../../types/technology";
import TechSection from "./TechSection";

interface TechnologiesContentProps {
  technologiesPromise: Promise<Technology[]>;
}

const TechnologiesContent = ({
  technologiesPromise,
}: TechnologiesContentProps) => {
  const technologies = use(technologiesPromise);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  console.log(selectedStack, setSelectedStack);

  return (
    <TechSection technologies={technologies} sidebarSlot={
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-950">Your Stack</h3>
        <p className="mt-2 text-sm text-slate-400">No technologies selected yet.</p>
      </div>
    }></TechSection>
    
  );
};

export default TechnologiesContent;
