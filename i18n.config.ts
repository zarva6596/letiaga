import eu from "@locales/eu";
import ua from "@locales/ua";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ua",
  messages: {
    eu,
    ua,
  },
}));
