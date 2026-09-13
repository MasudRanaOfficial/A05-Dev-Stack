import type { Technology } from "../../types/technology";
import { RatingStar } from "../common/RatingStar";

interface TechCardProps {
  tech: Technology;
}

const TechCard = ({ tech }: TechCardProps) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
        />
        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-500">{tech.badge}</span>
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">{tech.name}</h3>
      <p className="m-3 min-h-16 text-sm loading-6 text-slate-400">{tech.description}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">{tech.category}</span>
        <span className="text-sx font-normal text-slate-400">{tech.difficulty}</span>
        <RatingStar rating={tech.rating}/>
      </div>
        <button type="button" className="mt-5 h-11 w-full rounded-lg bg-slate-950 text-sm font-medium text-white transition hover:bg-slate-900">
          Add to Stack
        </button>
    </div>
  );
};

export default TechCard;
