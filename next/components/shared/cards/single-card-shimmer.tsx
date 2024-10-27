import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import CopyBtnShimmer from "./copy-btn/shimmer";

export default function SingleCardShimmer() {
  return (
    <Card className="w-full bg-opacity-90 animate-duration-300 animate-ease-in-out animate-fill-forwards">
      <CardHeader className="flex w-full justify-between items-center sm:px-6">
        <div className="font-bold animate-shimmer rounded-md min-h-[30px] min-w-[100px] w-full max-w-[150px] px-6" />
        <CopyBtnShimmer />
      </CardHeader>

      <Divider />

      <CardBody className="flex flex-col gap-4 sm:px-6 pb-4 sm:pb-6 justify-between w-full h-full">
        <div className="flex flex-col gap-1 h-full w-full min-h-[50px]">
          <div className="w-full h-full animate-shimmer rounded-md" />
          <div className="w-full h-full animate-shimmer rounded-md" />
          <div className="w-[calc(100%_-50px)] h-full animate-shimmer rounded-md" />
          <div className="w-[calc(100%_-100px)] h-full animate-shimmer rounded-md" />
        </div>

        <div className="bg-foreground-100 animate-shimmer h-full min-h-[45px] bg-opacity-80 border border-foreground-300 max-h-[60px] p-2 rounded-xl select-all" />
      </CardBody>
    </Card>
  );
}
