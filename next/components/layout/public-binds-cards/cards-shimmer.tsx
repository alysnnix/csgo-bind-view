import SingleCardShimmer from "@/components/shared/cards/single-card-shimmer";

export default function CardsShimmer() {
  return Array.from({ length: 6 }).map((_, index) => (
    <SingleCardShimmer key={index} />
  ));
}
