module.exports = {
  ...require("lint-config/eslint-nextjs"),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
