import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Suspense } from "react";

import CopyBtn from "./copy-btn";
import CopyBtnShimmer from "./copy-btn/shimmer";

interface Props {
  code: string;
  index: number;
  name: string;
  description: string;
}

export default function SingleCard({ description, code, name, index }: Props) {
  return (
    <Card
      className="w-full bg-opacity-90 opacity-0 animate-fade-up animate-duration-300 animate-ease-in-out animate-fill-forwards"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <CardHeader className="flex gap-4 w-full justify-between items-center sm:px-6">
        <p className="text-xl font-bold">{name}</p>

        <Suspense fallback={<CopyBtnShimmer />}>
          <CopyBtn text={code} />
        </Suspense>
      </CardHeader>

      <Divider />

      <CardBody className="flex flex-col gap-2 sm:px-6 pb-4 sm:pb-6 justify-between">
        <p>{description}</p>
        <div className="bg-foreground-100 min-h-[66px] bg-opacity-80 border border-foreground-300 p-2 rounded-xl select-all">
          {code}
        </div>
      </CardBody>
    </Card>
  );
}
