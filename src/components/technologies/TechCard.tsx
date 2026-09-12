import type { Technology } from "../../types/technology";

interface TechCardProps {
  tech: Technology;
}

const TechCard = ({tech}: TechCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain"/>
        <span className="badge badge-outline">{tech.badge}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-900">{tech.name}</h3>
      <p className="m-2 text-sm text-gray-500">{tech.description}</p>
      <div className="mt-4 flex items-center justify-between gap-3 text-sm">
        <span className="badge badge-soft">{tech.category}</span>
        <span className="text-gray-500">{tech.difficulty}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-700">⭐ {tech.rating}</p>
        <button type="button" className="btn btn-neutral btn-sm">Add to Stack</button>
      </div>
    </div>
  );
}

export default TechCard;