module.exports = {
  clearMocks: true,
  verbose: true,
  setupFiles: ["<rootDir>/test/setupTests.js"],
  setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  coverageDirectory: "coverage",
  testEnvironment: "node",
};
