import plugin from "tailwindcss/plugin";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export = plugin(({ matchUtilities, addUtilities, theme }) => {
  const highlightsUrl =
    "https://raw.githubusercontent.com/jln13x/tailwindcss-highlights/main/highlights";

  addUtilities({
    ".highlight": {
      zIndex: "1",
      position: "relative",
      "--tw-highlight-color": "black",
      "--tw-highlight-spread-x": "0",
      "--tw-highlight-spread-y": "0",
      "--tw-highlight-variant": `url(${highlightsUrl}/1.svg)`,

      "&::after": {
        content: `""`,
        top: "var(--tw-highlight-spread-y)",
        bottom: "var(--tw-highlight-spread-y)",
        left: "var(--tw-highlight-spread-x)",
        right: "var(--tw-highlight-spread-x)",
        zIndex: "-1",
        mask: "var(--tw-highlight-variant)",
        position: "absolute",
        backgroundColor: "var(--tw-highlight-color)",
      },
    },
  });

  matchUtilities(
    {
      highlight: (v) => {
        return {
          "--tw-highlight-color": `${v || "transparent"}`,
        };
      },
    },
    {
      values: flattenColorPalette(theme("colors")),
    }
  );

  matchUtilities(
    {
      "highlight-variant": (v) => {
        return {
          "--tw-highlight-variant": `url(${highlightsUrl}/${v}.svg)`,
        };
      },
    },
    {
      values: getVariantValues(8),
    }
  );

  const spreadValues = {
    "1": "-4px",
    "2": "-8px",
    "3": "-12px",
    "4": "-16px",
  };

  matchUtilities(
    {
      "highlight-spread": (v) => {
        return {
          "--tw-highlight-spread-y": v,
          "--tw-highlight-spread-x": v,
        };
      },
    },
    {
      values: spreadValues,
    }
  );

  matchUtilities(
    {
      "highlight-spread-y": (v) => {
        return {
          "--tw-highlight-spread-y": v,
        };
      },
    },
    {
      values: spreadValues,
    }
  );

  matchUtilities(
    {
      "highlight-spread-x": (v) => {
        return {
          "--tw-highlight-spread-x": v,
        };
      },
    },
    {
      values: spreadValues,
    }
  );
});

const getVariantValues = (amount: number) => {
  const variants = {};
  for (let i = 1; i <= amount; i++) {
    variants[i] = i;
  }
  return variants;
};
