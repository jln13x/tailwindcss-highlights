import plugin from "tailwindcss/plugin";
import { color, colorStyles, defaultColors } from "./color";
import { defaultSpreadValues, spread, spreadStyles } from "./spread";
import { defaultVariant, variant, variantStyles } from "./variant";

const features = [color, spread, variant];

export = plugin((p) => {
  const { addUtilities } = p;

  addUtilities({
    ".highlight": {
      isolation: "isolate",
      position: "relative",
      "white-space": "nowrap",
      ...defaultColors,
      ...defaultSpreadValues,
      ...defaultVariant,

      "&::after": {
        ...defaultStyles,
        ...colorStyles,
        ...spreadStyles,
        ...variantStyles,
      },
    },
  });

  features.forEach((f) => f(p));
});

const defaultStyles = {
  "--tw-highlight-z-index": "-1",
  content: "var(--tw-content)",
  position: "absolute",
  zIndex: "var(--tw-highlight-z-index)",
};
