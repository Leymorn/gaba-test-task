"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, getDictionary, localeCookieName, Locale } from "./config";

type I18nContextValue = {
  locale: Locale;
  dictionary: ReturnType<typeof getDictionary>;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

type I18nProviderProps = {
  initialLocale: Locale;
  children: ReactNode;
};

export function I18nProvider({ initialLocale, children }: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      dictionary: getDictionary(locale),
      toggleLocale: () => setLocale((current) => (current === "ru" ? "en" : "ru")),
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}

export { defaultLocale };
