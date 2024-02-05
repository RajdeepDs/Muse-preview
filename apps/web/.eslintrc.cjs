/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve("@muse/eslint-config/next")],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
