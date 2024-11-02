import SingleCard from "@/components/shared/cards";
import { IUser } from "@/types/auth/user";

interface Props {
  data: IUser["binds"];
}

export default async function BindCards({ data }: Props) {
  if (!data) return null;

  return data?.map((bind, index) => (
    <SingleCard
      key={bind.objectId}
      code={bind?.code}
      description={bind?.description}
      index={index}
      name={bind?.name}
    />
  ));
}
