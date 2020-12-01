/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)?'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/coverage/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
