import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Suspense } from "react";

import CopyBtn from "./copy-btn";
import CopyBtnShimmer from "./copy-btn/shimmer";

interface Props {
  code: string;
  index: number;
  title: string;
  description: string;
}

export default function SingleCard({ description, code, title, index }: Props) {
  return (
    <Card
      className="w-full opacity-0 animate-fade-up animate-duration-300 animate-ease-in-out animate-fill-forwards"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <CardHeader className="flex w-full justify-between items-center px-6">
        <p className="text-xl font-bold">{title}</p>

        <Suspense fallback={<CopyBtnShimmer />}>
          <CopyBtn text={code} />
        </Suspense>
      </CardHeader>

      <Divider />

      <CardBody className="flex flex-col gap-2 px-6 pb-6">
        <p>{description}</p>
        <div className="bg-foreground-100 p-2 rounded-xl">{code}</div>
      </CardBody>
    </Card>
  );
}
