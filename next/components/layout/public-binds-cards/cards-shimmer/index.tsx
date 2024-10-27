import SingleCardShimmer from "@/components/shared/cards/single-card-shimmer";

export default function CardsShimmer() {
  return Array.from({ length: 9 }).map((_, index) => (
    <SingleCardShimmer
      key={index}
      style={{
        opacity: 1 - index * 0.1,
      }}
    />
  ));
}
