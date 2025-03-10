// locales/client.ts
"use client";

import { createI18nClient } from "next-international/client";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useCurrentLocale,
  useChangeLocale,
} = createI18nClient({
  fr: () => import("./files/fr.json"),
  en: () => import("./files/en.json"),
  ar: () => import("./files/ar.json"),
});
