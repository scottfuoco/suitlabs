module.exports = {
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:mdx/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.mdx"],
      extends: ["plugin:mdx/recommended"],
      rules: {
        "prettier/prettier": "off",
      },
    },
  ],
  rules: {
    "max-len": ["warn", { code: 120 }],
  },
};
