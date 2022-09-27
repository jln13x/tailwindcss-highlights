import { PluginAPI } from "tailwindcss/types/config";

const highlightsUrl =
  "https://raw.githubusercontent.com/jln13x/tailwindcss-highlights/main/highlights";

export const variant = (p: PluginAPI) => {
  const { matchUtilities } = p;

  matchUtilities(
    {
      "highlight-variant": (v) => {
        return {
          "--tw-highlight-variant": `${v}`,
        };
      },
    },
    {
      values: getVariantValues(20),
    }
  );
};

const getVariantValues = (amount: number) => {
  const variants = {};
  for (let i = 1; i <= amount; i++) {
    variants[i] = `url(${highlightsUrl}/${i}.svg)`;
  }
  return variants;
};

export const defaultVariant = {
  "--tw-highlight-color": "black",
};

export const variantStyles = {
  mask: "var(--tw-highlight-variant)",
};
