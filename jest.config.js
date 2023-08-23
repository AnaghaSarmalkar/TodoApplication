module.exports = {
  preset: "jest-expo",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
