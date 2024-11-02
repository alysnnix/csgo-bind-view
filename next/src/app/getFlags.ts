import { FlagOverridesType, decrypt } from "@vercel/flags";
import { cookies } from "next/headers";

export default async function getFlags() {
  const overrideCookie = (await cookies()).get("vercel-flag-overrides")?.value;
  const overrides = overrideCookie
    ? await decrypt<FlagOverridesType>(overrideCookie)
    : {};

  const flags = {
    exampleFlag: overrides?.exampleFlag ?? false,
  };

  return flags;
}
