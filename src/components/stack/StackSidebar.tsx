import type { Technology } from "../../types/technology";
import { EmptyStack } from "./EmptyStack";
import StackItem from "./StackItem";

export interface StackSidebarProps {
  selectedStack: Technology[];
  onRemoveItem: (id: string) => void;
  onClearStack: () => void;
}

export default function StackSidebar({ selectedStack,
  onRemoveItem,
  onClearStack
 }: StackSidebarProps) {
  const isSelected = selectedStack.length > 0;
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">Your Stack</h3>
      <p className="mt-2 text-sm text-slate-400">
        {isSelected
          ? `${selectedStack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>
      {!isSelected ? (
        <EmptyStack />
      ) : (
        <div className="mt-5 space-y-3">
          {selectedStack.map((item) => (
            <StackItem 
            key={item.id}
            item={item}
            onRemove={onRemoveItem} />
          ))}
          <button
            type="button"
            onClick={onClearStack}
            className="mt-8 h-11 w-full rounded-lg border border-red-300 text-sm font-bold text-red-500"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
