import { PluginAPI } from "tailwindcss/types/config";

export const spread = (p: PluginAPI) => {
  const { matchUtilities } = p;

  matchUtilities(
    {
      "highlight-spread": (v) => {
        return {
          "--tw-highlight-spread-t": v,
          "--tw-highlight-spread-b": v,
          "--tw-highlight-spread-l": v,
          "--tw-highlight-spread-r": v,
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
          "--tw-highlight-spread-t": v,
          "--tw-highlight-spread-b": v,
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
          "--tw-highlight-spread-l": v,
          "--tw-highlight-spread-r": v,
        };
      },
    },
    {
      values: spreadValues,
    }
  );

  matchUtilities(
    {
      "highlight-spread-t": (v) => {
        return {
          "--tw-highlight-spread-t": v,
        };
      },
    },
    {
      values: spreadValues,
    }
  );

  matchUtilities(
    {
      "highlight-spread-b": (v) => {
        return {
          "--tw-highlight-spread-b": v,
        };
      },
    },
    {
      values: spreadValues,
    }
  );

  matchUtilities(
    {
      "highlight-spread-l": (v) => {
        return {
          "--tw-highlight-spread-l": v,
        };
      },
    },
    {
      values: spreadValues,
    }
  );

  matchUtilities(
    {
      "highlight-spread-r": (v) => {
        return {
          "--tw-highlight-spread-r": v,
        };
      },
    },
    {
      values: spreadValues,
    }
  );
};

export const defaultSpreadValues = {
  "--tw-highlight-spread-t": "0",
  "--tw-highlight-spread-b": "0",
  "--tw-highlight-spread-l": "0",
  "--tw-highlight-spread-r": "0",
};

export const spreadStyles = {
  top: "var(--tw-highlight-spread-t)",
  bottom: "var(--tw-highlight-spread-b)",
  left: "var(--tw-highlight-spread-l)",
  right: "var(--tw-highlight-spread-r)",
};

const spreadValues = {
  0: "0",
  none: "0",
  sm: "-4px",
  md: "-8px",
  lg: "-12px",
  xl: "-16px",
};
