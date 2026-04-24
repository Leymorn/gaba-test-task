import "server-only";

import { cookies } from "next/headers";
import { defaultLocale, isLocale, localeCookieName, Locale } from "./config";

export const getLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies();
  const locale = cookieStore.get(localeCookieName)?.value;

  if (locale && isLocale(locale)) {
    return locale;
  }

  return defaultLocale;
};
