import { use, useState } from "react";
import type { Technology } from "../../types/technology";
import { TechGrid } from "./TechGrid";

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
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900">Dev Stack</h1>

      <p className="mt-2 text-gray-500">
        Total technologies: {technologies.length}
      </p>

      <div className="mt-8">
        <TechGrid technologies={technologies}/>
      </div>
    </main>
  );
};

export default TechnologiesContent;
