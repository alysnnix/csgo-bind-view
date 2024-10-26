import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Suspense } from "react";

import CopyBtn from "./copy-btn";
import CopyBtnShimmer from "./copy-btn/shimmer";

interface Props {
  description: string;
  title: string;
  code: string;
}

export default function SingleCard({ description, code, title }: Props) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex w-full justify-between items-center">
        <p className="text-md">{title}</p>

        <Suspense fallback={<CopyBtnShimmer />}>
          <CopyBtn text={code} />
        </Suspense>
      </CardHeader>

      <CardBody className="flex flex-col gap-2">
        <p>{description}</p>
        <div className="bg-foreground-100 p-2 rounded-xl">{code}</div>
      </CardBody>
    </Card>
  );
}
