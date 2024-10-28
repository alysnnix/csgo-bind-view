import SingleCard from "@/app/ui/shared/cards";
import fetchData from "@/lib/fetchData";
import ParseService from "@/lib/parse/setup";

const fetchPublicBinds = async () => {
  const PublicBinds = ParseService.Object.extend("PublicBinds");
  const query = new ParseService.Query(PublicBinds);

  return await query.find();
};

export default async function PublicBindsCards() {
  const { data } = await fetchData(fetchPublicBinds);

  if (!data) return null;

  return data?.map((bind, index) => (
    <SingleCard
      key={bind.id}
      code={bind.get("code")}
      description={bind.get("description")}
      index={index}
      name={bind.get("name")}
    />
  ));
}
