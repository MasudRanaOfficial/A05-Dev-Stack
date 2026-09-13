interface RatingStarProps {
  rating: number;
}

export function RatingStar({ rating }: RatingStarProps) {
  return (
    <span className="flex items-center gap-1 text-sm font-semibold text-slate-600">
      <span className="text-yellow-400">★</span>
      {rating}
    </span>
  );
}
