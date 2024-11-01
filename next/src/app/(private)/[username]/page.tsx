import React from "react";

import PublicBindsCards from "@/components/layout/public-binds-cards";
import CardsShimmer from "@/components/layout/public-binds-cards/cards-shimmer";
import { getUserFromSession } from "@/lib/auth/session";

export default async function Page() {
  const user = await getUserFromSession();

  console.log(user);

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10 px-6 w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full sm:max-w-[70%] lg:max-w-[90%] xl:max-w-[80%] mx-auto">
          <React.Suspense fallback={<CardsShimmer />}>
            <PublicBindsCards />
          </React.Suspense>
        </div>
      </div>
    </section>
  );
}
