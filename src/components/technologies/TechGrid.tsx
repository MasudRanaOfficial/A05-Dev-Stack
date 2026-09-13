import type { Technology } from "../../types/technology";

import TechCard from "./TechCard";

interface TechGridProps {
  technologies: Technology[];
  stackItemIds: string[];
  onAddToStack: (tech: Technology) => void;
}

export function TechGrid({
  technologies,
  stackItemIds,
  onAddToStack,
}: TechGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackItemIds.includes(tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
}
