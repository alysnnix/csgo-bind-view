"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Button, ScrollShadow } from "@nextui-org/react";

function SingleCard() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex w-full justify-between items-center">
        <p className="text-md">NextUI</p>
        <Button>Copiar</Button>
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        <p>Make beautiful websites regardless of your design experience.</p>
        <div className="bg-foreground-100 p-2 rounded-xl">
          <ScrollShadow hideScrollBar className="w-full h-[60px]">
            cl_automate 1 cl_automate 1 cl_automate 1 cl_automate 1 cl_automate
            1 cl_automate 1 cl_automate 1 cl_automate 1 cl_automate 1
            cl_automate 1 cl_automate 1 cl_automate 1 cl_automate 1 cl_automate
            1
          </ScrollShadow>
        </div>
      </CardBody>
    </Card>
  );
}

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10 px-6">
      <div>
        <h1 className="flex flex-col text-xl leading-4">
          <span className="text-5xl font-bold">Counter Strike</span>My binds
          view
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </section>
  );
}
