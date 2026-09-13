import type { ReactNode } from "react";
import type { Technology } from "../../types/technology";
import { TechGrid } from "./TechGrid";

interface TechSectionProps {
  technologies: Technology[];
  sidebarSlot: ReactNode;
}

export default function TechSection({
  technologies,
  sidebarSlot,
}: TechSectionProps) {
  return (
    <section id="technologies" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-slate-950">
            Explore the <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Technologies</span>
          </h2>

          <p className="mt-3 text-base text-slate-400">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <TechGrid technologies={technologies} />
          </div>
          <aside className="lg:col-span-2">{sidebarSlot}</aside>
        </div>
      </div>
    </section>
  );
}
