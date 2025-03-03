// locales/server.ts
import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    fr: () => import("./files/fr.json"),
    en: () => import("./files/en.json"),
    ar: () => import("./files/ar.json"),
  });
